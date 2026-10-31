export const VERSION = 3;
export const THRESHOLD = 3.25;
export const STORAGE_KEY = 'within-attachment-v3';
export const questions = [{
  id: 1,
  dimension: 'anxiety',
  text: '当伴侣对我的态度不如平时热情时，我容易担心自己在对方心中的位置发生了变化。',
  trigger: '对方的回应比平时冷淡',
  thought: '我在对方心里，还和以前一样重要吗？',
  feeling: '不确定、紧张',
  reaction: '想更快得到回应，或反复确认关系',
  need: '稳定、可理解的回应',
  tip: '先描述一次具体的变化，再表达你的需要。把“你不在乎我了”换成“这两天我们的聊天少了，我有一点不安”。',
  script: '这两天我们的互动比平时少，我发现自己有点不安。我想了解你最近的状态，也希望我们能留一点专心聊天的时间。你觉得什么时候合适？'
}, {
  id: 2,
  dimension: 'avoidance',
  reverse: true,
  text: '当我遇到难过或无助的事情时，我能自在地向伴侣寻求支持。',
  trigger: '难过、无助，需要向伴侣求助',
  thought: '把自己的需要说出来，会是什么感觉？',
  feeling: '犹豫、不自在',
  reaction: '先把需要收起来，尝试独自消化',
  need: '可以安心求助的空间',
  tip: '尝试一次很小、很具体的求助，例如请对方听你说十分钟。观察对方的实际回应，再决定下一步。',
  script: '我今天遇到一点难过的事，想试着和你说说。你现在方便听我讲十分钟吗？暂时不用帮我解决，陪我一下就好。'
}, {
  id: 3,
  dimension: 'anxiety',
  text: '即使伴侣明确表达过喜欢我，我有时仍会担心这份感情不能持续。',
  trigger: '已经获得喜欢的表达，仍担心感情能否持续',
  thought: '现在喜欢我，以后也会吗？',
  feeling: '悬而未决、担忧',
  reaction: '想再次获得保证，却很难长久安心',
  need: '持续、可信的关系体验',
  tip: '记录一周里对方实际表达在乎的行动。再次不安时先回看这些事实，再判断这次是否需要新的沟通。',
  script: '我听到了你对我的喜欢，也很珍惜。有时我还是会担心以后。我想和你一起找到一些能持续表达在乎的小习惯，比如每周留一个属于我们的晚上。'
}, {
  id: 4,
  dimension: 'avoidance',
  text: '即使伴侣值得信任，我仍不太习惯让对方看见我脆弱的一面。',
  trigger: '需要让值得信任的人看见脆弱',
  thought: '我准备好让对方看见这一面了吗？',
  feeling: '暴露感、不自在',
  reaction: '隐藏情绪，或先表现得一切都好',
  need: '被温柔接住，也能保留自己的节奏',
  tip: '从一件轻微的烦恼开始分享，并提前说清楚希望得到什么回应。你可以自己决定分享的深度。',
  script: '有件事让我有点难受，平时我不太习惯说这些。我想慢慢试着告诉你，也希望你先听我说，不急着评价或给建议。'
}, {
  id: 5,
  dimension: 'anxiety',
  reverse: true,
  text: '当伴侣忙于自己的事情、暂时顾不上我时，我通常不会怀疑自己是否被重视。',
  trigger: '伴侣忙碌，暂时无法回应',
  thought: '对方没有时间，是不是意味着我不重要？',
  feeling: '失落、焦急',
  reaction: '频繁查看消息，或很想立刻确认对方的态度',
  need: '可预期的联系和独立生活的余地',
  tip: '一起约定忙碌时的简短告知和大致联系时间。等待期间安排一件属于自己的事，减少无休止地查看消息。',
  script: '我知道你忙的时候需要专心。我有时会因为不知道什么时候能联系上你而不安。我们能否忙前简单说一声，再约个大致聊天时间？'
}, {
  id: 6,
  dimension: 'avoidance',
  text: '当我面临个人困难时，我更愿意独自承担，而不是依靠伴侣。',
  trigger: '遇到个人困难，需要决定是否依靠伴侣',
  thought: '这件事还是我自己处理更自在吗？',
  feeling: '紧绷、迟疑',
  reaction: '优先独自承担，把支持放在最后',
  need: '保有自主，也可以获得支持',
  tip: '区分“我想自己做”和“我不敢请人帮忙”。选一件可以合作的小事，保留主导权，同时让对方参与。',
  script: '这件事我想自己做决定，但过程里也希望有你支持。你愿意帮我一起梳理一下选择吗？最后我会自己决定。'
}, {
  id: 7,
  dimension: 'anxiety',
  text: '我有时会担心自己对伴侣的感情，比伴侣对我的感情更深。',
  trigger: '觉得双方的投入或表达不对等',
  thought: '是不是只有我更认真、更在乎？',
  feeling: '委屈、不平衡',
  reaction: '比较付出，或通过试探判断对方的心意',
  need: '被重视、互相投入的关系',
  tip: '说清楚对你而言什么行为代表在乎，并询问对方的表达方式。把模糊的“谁爱得更多”变成可以协商的具体行动。',
  script: '最近我有些担心我们对关系的投入不太一致。对我来说，主动约见面会让我感到被重视。你通常通过什么方式表达在乎？我们可以一起聊聊。'
}, {
  id: 8,
  dimension: 'avoidance',
  reverse: true,
  text: '我通常愿意向伴侣坦诚分享自己内心深处的担忧。',
  trigger: '谈到内心深处的担忧',
  thought: '这份担忧，我愿意让对方知道多少？',
  feeling: '保留、犹豫',
  reaction: '转向表面的交流，或把重要的担忧留给自己',
  need: '安全、没有催促的倾听',
  tip: '先给感受命名，再尝试说一个小片段。可以用“我还没完全想清楚”开头，让表达不必一次就完整。',
  script: '我有一个担忧，还没有完全想清楚。想先和你分享一点，也可能需要一点时间组织语言。你愿意先听听吗？'
}, {
  id: 9,
  dimension: 'anxiety',
  text: '即使关系没有发生明显问题，我有时也会害怕伴侣最终离开我。',
  trigger: '关系平稳时，仍想到可能的分离',
  thought: '如果有一天对方离开，我该怎么办？',
  feeling: '担心失去、悬着一颗心',
  reaction: '预想坏结果，或想提前确认关系是否安全',
  need: '当下的安全感和自我支持',
  tip: '不安出现时，把“我想到的可能”与“眼前发生的事实”分别写下。先照顾身体和情绪，再选择是否需要向伴侣确认。',
  script: '我们的关系最近没有明显问题，但我有时还是会担心失去你。我想先把这种感受告诉你，也在练习分清担忧和事实。此刻能抱抱我、陪我待一会儿吗？'
}, {
  id: 10,
  dimension: 'avoidance',
  text: '当伴侣想更深入地了解我的内心时，我有时会感到不自在。',
  trigger: '伴侣希望更深入地了解你',
  thought: '我可以按自己的节奏靠近吗？',
  feeling: '有压力、想保留空间',
  reaction: '简短回应、转移话题，或暂时退开',
  need: '被尊重的边界与靠近节奏',
  tip: '为深入交流设一个清楚的边界，并给出愿意继续的时间。暂停时说明你会回来，避免让对方只能猜测。',
  script: '我知道你想更了解我，我也愿意慢慢靠近。这个话题我现在有点不自在，想先整理一下。我们明晚再聊，可以吗？'
}, {
  id: 11,
  dimension: 'anxiety',
  reverse: true,
  text: '在没有明显证据表明感情出现问题时，我通常相信伴侣仍然在乎我。',
  trigger: '缺少明确的关系信号，需要相信对方仍在乎',
  thought: '没有得到新的确认，我还能相信这段关系吗？',
  feeling: '怀疑、难以踏实',
  reaction: '寻找更多信号，或反复解读细节',
  need: '可信的事实与清楚的确认方式',
  tip: '先列出支持与不支持担忧的事实，再表达一个具体问题。尽量用直接询问代替反复猜测细节。',
  script: '我最近有时会反复猜测你的想法，但也知道现在没有明显的问题。我想直接了解一下：你最近对我们的关系有什么感受？'
}, {
  id: 12,
  dimension: 'avoidance',
  text: '在亲密关系中，让自己在情感上依赖另一个人，会令我感到不太舒服。',
  trigger: '感到自己正在情感上依赖对方',
  thought: '依靠一个人时，我还能保有自己吗？',
  feeling: '不自在、警觉',
  reaction: '强调自给自足，或在靠近后想拉开一点距离',
  need: '兼顾亲密与自主的连接',
  tip: '分别写下你想保留的个人空间和愿意共享的部分。与伴侣协商具体边界，让依靠成为可选择、可调整的合作。',
  script: '我喜欢我们之间的亲近，也需要保留一些自己的时间。我想和你一起商量，哪些事情我们彼此支持，哪些时间各自安排，让我们都舒服。'
}];
export const profiles = {
  secure: {
    name: '安全型倾向',
    short: '自在靠近，也保有自己',
    description: '在这次回答中，你的依恋焦虑和回避都未达到暂定高分线。你可能较能相信关系中的连接，也能在需要时保留自己的空间。遇到压力时仍可能有波动，可以继续观察具体情境。',
    color: 'sage',
    myths: ['安全型倾向的人也会不安、吃醋或需要确认。', '感到自在不代表没有需要，持续表达仍然重要。']
  },
  anxious: {
    name: '焦虑型倾向',
    short: '渴望靠近，也渴望确定',
    description: '这次回答中，你对关系变化和连接稳定性的敏感更突出，而对亲密本身的回避相对较少。对你而言，回应的清楚与持续可能很重要。可以留意哪些不安来自眼前的事实，哪些只是尚未证实的担忧。',
    color: 'peach',
    myths: ['渴望回应不等于“太黏人”，需要可以被清楚表达。', '这份倾向无法说明伴侣是否爱你，也不说明关系必然会失败。']
  },
  avoidant: {
    name: '回避型倾向',
    short: '珍惜亲密，也需要呼吸',
    description: '这次回答中，你在求助、敞开或情感依赖时的不自在更突出，而对被离开的担忧相对较少。自主和靠近的节奏可能对你很重要。你可以从自己愿意的小步开始，观察安全的依靠是什么感觉。',
    color: 'blue',
    myths: ['需要空间不等于没有感情，也无法据此判断一个人的爱有多深。', '独立与接受支持可以同时存在，表达边界也能帮助连接。']
  },
  mixed: {
    name: '焦虑与回避并存倾向',
    short: '想要靠近，也想保护自己',
    description: '这次回答中，对关系不确定性的担忧和对敞开、依赖的不自在都比较突出。靠近与保留空间的需要可能同时出现。你可以观察它们各在什么情境被唤起，让自己的需要更容易被理解。',
    color: 'lilac',
    myths: ['同时需要亲密与空间并不矛盾，两种需要都值得被理解。', '这组分数不能推断你的成长经历、创伤或实际关系行为。']
  }
};
export function cleanAnswers(input) {
  if (!input || typeof input !== 'object' || Array.isArray(input)) return {};
  return Object.fromEntries(questions.filter(q => Number.isInteger(input[q.id]) && input[q.id] >= 1 && input[q.id] <= 5).map(q => [q.id, input[q.id]]));
}
export function classify(anxiety, avoidance) {
  if (anxiety >= THRESHOLD && avoidance >= THRESHOLD) return 'mixed';
  if (anxiety >= THRESHOLD) return 'anxious';
  if (avoidance >= THRESHOLD) return 'avoidant';
  return 'secure';
}
export function scoreLevel(score) {
  return score < 2.5 ? '较低' : score < THRESHOLD ? '中等' : '较高';
}
export function explainDimension(dimension, score) {
  const descriptions = {
    anxiety: {
      较低: '你较少报告对被离开或不被重视的担忧，通常更容易相信关系的连接。',
      中等: '你在一些情境中可能需要更多确认。可以留意这种感受何时出现、何时缓解。',
      较高: '你对关系稳定性与回应变化的担忧较突出。清楚、可预期的沟通可能更能支持你。'
    },
    avoidance: {
      较低: '你较能接受敞开、求助与情感依靠，亲密中的分享通常更自在。',
      中等: '你在部分求助或深入交流的情境中有所保留，可以观察自己舒服的节奏。',
      较高: '你在敞开、依靠或深入交流时的不自在较突出。自主和边界可能对你更重要。'
    }
  };
  return descriptions[dimension][scoreLevel(score)];
}
export function scoreAnswers(input) {
  const answers = cleanAnswers(input);
  if (Object.keys(answers).length !== questions.length) throw new Error('请完成全部 12 道题，每题选择 1–5 分。');
  const items = questions.map(q => ({
    ...q,
    answer: answers[q.id],
    score: q.reverse ? 6 - answers[q.id] : answers[q.id]
  }));
  const average = dimension => items.filter(q => q.dimension === dimension).reduce((sum, q) => sum + q.score, 0) / 6;
  const anxiety = average('anxiety');
  const avoidance = average('avoidance');
  return {
    anxiety,
    avoidance,
    type: classify(anxiety, avoidance),
    items
  };
}
const maintenanceTips = ['延续有效的连接：每周留一次不被打断的聊天时间，分别说一件感到被在乎的事，以及一个还没被满足的需要。', '让支持更具体：告诉对方你此刻想要倾听、陪伴还是一起想办法，也邀请对方说出自己的偏好。', '给变化留出空间：忙碌或发生分歧时，提前说明联系和独处的安排。隔一段时间再一起看看，原有约定是否仍适合。'];
export function buildReport(answers) {
  const scores = scoreAnswers(answers);
  const ranked = [...scores.items].sort((a, b) => b.score - a.score || a.id - b.id);
  const candidates = ranked.filter(q => q.score >= 3);
  let observations = candidates.slice(0, 3);
  if (scores.type === 'mixed' && observations.length && new Set(observations.map(q => q.dimension)).size === 1) {
    const other = candidates.find(q => q.dimension !== observations[0].dimension);
    if (other) observations = [...observations.slice(0, 2), other];
  }
  const primary = observations[0];
  const profile = profiles[scores.type];
  return {
    ...scores,
    profile,
    observations,
    explanations: {
      anxiety: explainDimension('anxiety', scores.anxiety),
      avoidance: explainDimension('avoidance', scores.avoidance)
    },
    signal: ranked[0].score >= 4 ? 'high' : ranked[0].score >= 3 ? 'moderate' : 'low',
    needs: primary ? [...new Set(observations.map(q => q.need))] : ['稳定而自由的连接', '可以表达的需要', '彼此尊重的边界'],
    chain: primary ? [primary.trigger, primary.thought, primary.feeling, primary.reaction] : ['关系里出现变化或分歧', '我可以理解发生了什么，也可以说出需要', '允许自己的感受存在', '沟通、求助，或协商适合彼此的空间'],
    tips: [...observations.map(q => q.tip), ...maintenanceTips].slice(0, 3),
    script: primary ? primary.script : '最近和你在一起，我感到很自在，也想继续了解我们各自的需要。这周我们找一点时间聊聊：哪些相处方式让你感到被在乎，有什么希望我们一起调整的吗？'
  };
}
export function reportText(report) {
  const triggers = report.observations.length ? report.observations.map(q => `- ${q.trigger}（第 ${q.id} 题：原答案 ${q.answer}/5，换算分 ${q.score}/5）`).join('\n') : '这次回答中没有明显的高分触发项。可以继续观察压力下的变化。';
  return `恋爱依恋类型测试 V3.0\n\n主要倾向：${report.profile.name}\n${report.profile.description}\n\n依恋焦虑：${report.anxiety.toFixed(2)}/5（${scoreLevel(report.anxiety)}）\n${report.explanations.anxiety}\n依恋回避：${report.avoidance.toFixed(2)}/5（${scoreLevel(report.avoidance)}）\n${report.explanations.avoidance}\n\n值得观察的关系场景\n${triggers}\n\n可供核对的反应链\n${report.chain.join(' → ')}\n这条反应链是自我观察提示，不能据此确定你的实际行为或心理成因。\n\n可能的深层需要\n${report.needs.join('；')}\n\n常见误解\n${report.profile.myths.map(x => `- ${x}`).join('\n')}\n\n三条建议\n${report.tips.map((x, i) => `${i + 1}. ${x}`).join('\n')}\n\n沟通话术\n${report.script}\n\n计分说明\n焦虑题：1、3、5、7、9、11；回避题：2、4、6、8、10、12。反向题：2、5、8、11，按 6−原答案换算；每个维度取 6 题平均值。低于 2.5 为较低，2.5 至低于 3.25 为中等，3.25 及以上为较高。3.25 分界线及等级均为暂定规则，未经过常模验证；本测试用于自我观察，不构成心理诊断。\n`;
}
