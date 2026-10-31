import test from 'node:test'
import assert from 'node:assert/strict'
import { questions, THRESHOLD, cleanAnswers, classify, scoreLevel, scoreAnswers, buildReport, reportText } from '../src/attachment/model.mjs'

// Fixtures are specified in scored units, then converted back to real answers.
function answersFor(anxiety, avoidance) {
  return Object.fromEntries(questions.map(q => {
    const scored = q.dimension === 'anxiety' ? anxiety : avoidance
    return [q.id, q.reverse ? 6 - scored : scored]
  }))
}

test('12 questions use six items per dimension and the four specified reverse items', () => {
  assert.equal(questions.length, 12)
  assert.equal(new Set(questions.map(q => q.id)).size, 12)
  assert.equal(questions.filter(q => q.dimension === 'anxiety').length, 6)
  assert.equal(questions.filter(q => q.dimension === 'avoidance').length, 6)
  assert.deepEqual(questions.filter(q => q.reverse).map(q => q.id), [2, 5, 8, 11])
})

for (const [name, anxiety, avoidance, type] of [['secure', 1, 1, 'secure'], ['anxious', 5, 1, 'anxious'], ['avoidant', 1, 5, 'avoidant'], ['mixed', 5, 5, 'mixed']]) {
  test(`scoring and report: ${name}`, () => {
    const report = buildReport(answersFor(anxiety, avoidance))
    assert.equal(report.anxiety, anxiety)
    assert.equal(report.avoidance, avoidance)
    assert.equal(report.type, type)
    assert.equal(report.tips.length, 3)
    assert.equal(report.chain.length, 4)
    assert.ok(report.script.length > 20)
    assert.equal(report.profile.myths.length, 2)
    assert.ok(report.needs.length)
    assert.ok(report.explanations.anxiety.length > 10)
    assert.ok(report.explanations.avoidance.length > 10)
  })
}

test('reverse items use 6 minus raw answer and dimension averages retain full precision', () => {
  const answers = Object.fromEntries(questions.map(q => [q.id, 1]))
  const score = scoreAnswers(answers)
  assert.equal(score.anxiety, 14 / 6)
  assert.equal(score.avoidance, 14 / 6)
  assert.equal(score.items.find(q => q.id === 2).score, 5)
  assert.equal(score.items.find(q => q.id === 1).score, 1)
})

test('3.25 threshold uses unrounded values and includes the exact boundary', () => {
  assert.equal(THRESHOLD, 3.25)
  assert.equal(classify(3.249, 3.249), 'secure')
  assert.equal(classify(3.25, 3.249), 'anxious')
  assert.equal(classify(3.249, 3.25), 'avoidant')
  assert.equal(classify(3.25, 3.25), 'mixed')
  assert.equal(scoreLevel(2.499), '较低')
  assert.equal(scoreLevel(2.5), '中等')
  assert.equal(scoreLevel(3.249), '中等')
  assert.equal(scoreLevel(3.25), '较高')
})

test('missing, non-integer, out-of-range and string answers cannot produce a report', () => {
  for (const invalid of [null, undefined, [], {}, { 1: 3 }]) assert.throws(() => buildReport(invalid))
  for (const value of [0, 6, 2.5, NaN, Infinity, '3', null]) {
    assert.throws(() => buildReport({ ...answersFor(3, 3), 5: value }))
  }
})

test('cached answers are sanitized and unknown fields are discarded', () => {
  assert.deepEqual(cleanAnswers({ 1: 5, 2: 0, 3: '4', 4: 1, 5: null, 99: 3, mode: 'report' }), { 1: 5, 4: 1 })
  assert.deepEqual(cleanAnswers(null), {})
  assert.deepEqual(cleanAnswers([]), {})
})

test('two people with the same type and dimension scores receive different item-based reports', () => {
  const a = { ...answersFor(4, 1), 1: 5, 9: 3 }
  const b = { ...answersFor(4, 1), 1: 3, 9: 5 }
  const ra = buildReport(a), rb = buildReport(b)
  assert.equal(ra.type, rb.type)
  assert.equal(ra.anxiety, rb.anxiety)
  assert.equal(ra.avoidance, rb.avoidance)
  assert.equal(ra.observations[0].id, 1)
  assert.equal(rb.observations[0].id, 9)
  assert.notEqual(ra.script, rb.script)
  assert.notDeepEqual(ra.tips, rb.tips)
  assert.notDeepEqual(ra.chain, rb.chain)
})

test('reverse-scored high items are eligible for personalized observations', () => {
  const a = answersFor(4, 1)
  a[5] = 1
  const r = buildReport(a)
  assert.equal(r.observations[0].id, 5)
  assert.equal(r.observations[0].answer, 1)
  assert.equal(r.observations[0].score, 5)
})

test('mixed profiles include signals from both dimensions', () => {
  const r = buildReport(answersFor(5, 4))
  assert.equal(r.type, 'mixed')
  assert.deepEqual([...new Set(r.observations.map(q => q.dimension))].sort(), ['anxiety', 'avoidance'])
})

test('low-signal reports do not invent high-scoring triggers', () => {
  const r = buildReport(answersFor(1, 1))
  assert.equal(r.signal, 'low')
  assert.deepEqual(r.observations, [])
  assert.equal(r.tips.length, 3)
  assert.ok(r.script.includes('自在'))
})

test('moderate signals remain distinguished from high signals', () => {
  const r = buildReport(answersFor(3, 3))
  assert.equal(r.signal, 'moderate')
  assert.equal(r.type, 'secure')
  assert.equal(r.observations.length, 3)
  assert.ok(r.observations.every(q => q.score === 3))
})

test('reports are deterministic, preserve input, and export all report sections and scoring limitations', () => {
  const a = answersFor(4, 2)
  const original = structuredClone(a)
  assert.deepEqual(buildReport(a), buildReport(a))
  assert.deepEqual(a, original)
  const text = reportText(buildReport(a))
  assert.ok(text.includes(buildReport(a).explanations.anxiety))
  assert.ok(text.includes(buildReport(a).explanations.avoidance))
  for (const section of ['依恋焦虑', '依恋回避', '关系场景', '反应链', '深层需要', '常见误解', '三条建议', '沟通话术', '3.25', '未经过常模验证']) assert.ok(text.includes(section), section)
})
