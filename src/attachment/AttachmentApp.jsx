import React, { useEffect, useState } from 'react';
import { VERSION, STORAGE_KEY, THRESHOLD, questions, cleanAnswers, buildReport, scoreLevel, explainDimension, reportText } from './model.mjs';
import './attachment.css';
function Icon({
  name = 'arrow',
  size = 20,
  ...props
}) {
  const paths = {
    arrow: <path d="M4 12h15M13 5l7 7-7 7" />,
    heart: <path d="M20.3 5.7a5.4 5.4 0 0 0-7.6 0L12 6.4l-.7-.7a5.4 5.4 0 0 0-7.6 7.6L12 21l8.3-7.7a5.4 5.4 0 0 0 0-7.6Z" />,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    leaf: <><path d="M20 4C8 1 2 8 6 15s16 2 14-11Z" /><path d="M4 21 16 9M9 16v-5M9 16h5" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    lock: <><rect x="5" y="10" width="14" height="11" rx="3" /><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3" /></>,
    download: <path d="M12 3v12m-4-4 4 4 4-4M4 16v5h16v-5" />,
    copy: <><rect x="8" y="8" width="12" height="13" rx="2" /><path d="M15 8V3H3v13h5" /></>,
    back: <path d="M20 12H4m6-6-6 6 6 6" />
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{paths[name] || paths.arrow}</svg>;
}
function ConnectionArt() {
  return <div className="connection-art" aria-hidden="true"><svg viewBox="0 0 450 350" fill="none">
    <defs><linearGradient id="sage-shape" x1="75" y1="86" x2="229" y2="285" gradientUnits="userSpaceOnUse"><stop stopColor="#B4C5AF" /><stop offset="1" stopColor="#7E9C86" /></linearGradient><linearGradient id="peach-shape" x1="218" y1="69" x2="359" y2="270" gradientUnits="userSpaceOnUse"><stop stopColor="#F1C6AB" /><stop offset="1" stopColor="#DDAF90" /></linearGradient></defs>
    <ellipse cx="230" cy="190" rx="169" ry="128" stroke="#D7DED0" strokeDasharray="3 7" transform="rotate(-22 230 190)" /><ellipse cx="227" cy="186" rx="133" ry="157" stroke="#E6DCD0" transform="rotate(38 227 186)" />
    <path d="M171 83c50 1 74 50 63 102-11 48-50 110-98 99-46-11-58-61-43-109 13-42 29-93 78-92Z" fill="url(#sage-shape)" /><path d="M287 65c45 5 66 50 65 99-2 57-9 113-52 123-47 11-79-37-79-88-1-54 16-139 66-134Z" fill="url(#peach-shape)" />
    <path d="M167 143c-13 23-18 59-6 83m126-99c17 20 23 57 13 86" stroke="#F8F7F0" strokeWidth="2.3" strokeLinecap="round" /><path d="M174 188c17-31 36-29 53 4 15 29 36 30 57 1" stroke="#FCFAF2" strokeWidth="2.5" strokeLinecap="round" /><path d="m222 146 5 6 7-7" stroke="#F9F6ED" strokeWidth="2" strokeLinecap="round" />
    <circle cx="76" cy="109" r="5" fill="#D5AC87" /><circle cx="364" cy="231" r="4" fill="#7C9480" /><circle cx="340" cy="72" r="3" fill="#B0BDA5" /><path d="m98 266 3 8 8 3-8 3-3 8-3-8-8-3 8-3Zm256-154 3 7 7 3-7 3-3 7-3-7-7-3 7-3Z" fill="#B9C4AD" />
  </svg><span className="art-caption">CLOSENESS, AT YOUR OWN PACE.</span><span className="art-label label-one">靠近彼此</span><span className="art-label label-two">也看见自己</span></div>;
}
function readDraft() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved?.version !== VERSION) return {
      answers: {},
      mode: 'questions'
    };
    const answers = cleanAnswers(saved.answers);
    return {
      answers,
      mode: saved.mode === 'report' && Object.keys(answers).length === 12 ? 'report' : 'questions'
    };
  } catch {
    return {
      answers: {},
      mode: 'questions'
    };
  }
}
function Methodology() {
  return <details className="methodology"><summary>关于这份测试与计分 <span>+</span></summary><div>
    <p>依恋焦虑关注对关系稳定性的担忧；依恋回避关注敞开、求助与情感依赖时的不自在。它们会随关系和情境变化。</p>
    <p>焦虑维度：第 1、3、5、7、9、11 题；回避维度：第 2、4、6、8、10、12 题。第 2、5、8、11 题反向换算为「6 − 原答案」，每个维度各取 6 题的平均分。</p>
    <p>低于 2.5 为较低，2.5 至低于 3.25 为中等，3.25 及以上为较高。类型按两个维度是否达到 3.25 划分。<strong>分界线和分数等级均为暂定规则，未经过常模验证。</strong></p>
    <p>题目分析和反应链是自我观察提示，不能据此推断你一定有某种心理成因或实际行为。本原型用于自我了解与用户体验测试，不构成心理诊断。</p>
  </div></details>;
}
function Questionnaire({
  answers,
  onAnswer,
  onSubmit,
  onClear,
  attempted,
  storageOk
}) {
  const count = Object.keys(answers).length;
  return <>
    <section className="hero" aria-labelledby="hero-title"><div className="hero-copy"><div className="eyebrow"><span /> A LITTLE CLOSER TO YOURSELF</div><h1 id="hero-title">在爱里，<br />看见真实的<span className="serif-accent">自己。</span></h1><p className="hero-description">有时渴望靠近，有时需要距离。<br />从你的真实感受出发，读懂属于你的亲密关系模式。</p><div className="hero-meta"><span><Icon name="leaf" size={16} />12 道情境题目</span><span><Icon name="clock" size={16} />约 3 分钟</span></div><a className="button primary hero-button" href="#questionnaire">{count ? '继续了解自己' : '开始了解自己'}<Icon /></a><p className="hero-note">恋爱依恋类型测试 <span>V3.0</span> · 完整个性化报告</p></div><ConnectionArt /></section>
    <div className="intro-strip"><Icon name="heart" size={22} /><p>每一种靠近的方式，都有值得被理解的需要。<span>带着好奇回答，让感受先于“正确答案”。</span></p><span className="strip-mark">a moment for you</span></div>
    <section id="questionnaire" className="questionnaire" aria-labelledby="questionnaire-heading"><div className="section-heading"><div><div className="eyebrow">01 / SELF EXPLORATION</div><h2 id="questionnaire-heading">从你的感受开始</h2></div><div className="question-count"><strong>{String(count).padStart(2, '0')}</strong><span>/ 12 已完成</span></div></div><div className="question-intro"><p>请根据<strong>当前或最近一段认真投入的恋爱关系</strong>作答。<br />选择更接近真实感受的选项，无需反复斟酌。</p><span><i />1 非常不符合 <b>—</b> 5 非常符合</span></div><div className="answer-progress" role="progressbar" aria-label="答题进度" aria-valuemin={0} aria-valuemax={12} aria-valuenow={count}><div style={{
          width: `${count / 12 * 100}%`
        }} /></div>
      <form onSubmit={onSubmit} noValidate><div className="question-grid">{questions.map(q => <fieldset className={`question-card ${answers[q.id] ? 'is-answered' : ''} ${attempted && !answers[q.id] ? 'is-missing' : ''}`} id={`question-${q.id}`} key={q.id} aria-describedby={attempted && !answers[q.id] ? `error-${q.id}` : undefined}><legend><span className="question-number">{String(q.id).padStart(2, '0')}<span aria-hidden="true"> /</span></span><span className="question-text">{q.text}</span></legend><div className="rating-options">{[1, 2, 3, 4, 5].map(value => <label className="rating-option" key={value}><input type="radio" required aria-invalid={attempted && !answers[q.id] ? true : undefined} name={`question-${q.id}`} value={value} checked={answers[q.id] === value} onChange={() => onAnswer(q.id, value)} aria-label={`${value} 分，${['非常不符合', '比较不符合', '不确定或一般', '比较符合', '非常符合'][value - 1]}`} /><span>{value}</span></label>)}</div><div className="rating-labels"><span>非常不符合</span><span>非常符合</span></div>{attempted && !answers[q.id] && <p className="field-error" id={`error-${q.id}`}>请选择一个最接近你感受的选项</p>}</fieldset>)}</div>
        <div className="submit-section"><div className="submit-copy"><span className="tiny-symbol">✳</span><div><h3>把答案，连成更懂你的报告。</h3><p>双维度解读 · 关系触发点 · 个性化建议与沟通话术</p></div></div>{attempted && count < 12 && <p className="submit-error" role="alert">还有 {12 - count} 道题未完成，已为你定位到第一道。</p>}<button className="button primary generate-button" type="submit">生成我的完整依恋报告<Icon /></button><div className="submit-foot"><span>{count === 12 ? '已完成，准备好看见自己的关系模式了吗？' : `已完成 ${count} / 12 题`}</span>{count > 0 && <button type="button" className="text-button" onClick={onClear}>清空答案</button>}</div></div>
      </form><p className={`privacy-note ${!storageOk ? 'storage-warning' : ''}`}><Icon name="lock" size={14} />{storageOk ? '回答仅保存在当前浏览器，不上传服务器。你可以随时清除。' : '当前浏览器无法暂存回答，关闭页面后需要重新作答。'}</p>
    </section>
  </>;
}
function AttachmentMap({
  report
}) {
  const position = score => (score - 1) / 4 * 100;
  const split = position(THRESHOLD);
  return <div className="map-wrap"><div className="map-y-label">依恋焦虑 <span>高 ↑</span></div><div className="attachment-map" role="img" aria-label={`双维度位置：依恋焦虑 ${report.anxiety.toFixed(2)} 分，依恋回避 ${report.avoidance.toFixed(2)} 分，${report.profile.name}`}><div className="map-quadrants" style={{
        gridTemplateColumns: `${split}% 1fr`,
        gridTemplateRows: `${100 - split}% 1fr`
      }}><span>焦虑型倾向</span><span>焦虑与回避并存</span><span>安全型倾向</span><span>回避型倾向</span></div><div className="map-line horizontal" style={{
        bottom: `${split}%`
      }} /><div className="map-line vertical" style={{
        left: `${split}%`
      }} /><div className="map-dot" style={{
        left: `clamp(10px, ${position(report.avoidance)}%, calc(100% - 10px))`,
        bottom: `clamp(10px, ${position(report.anxiety)}%, calc(100% - 10px))`
      }}><span>你的位置</span></div></div><div className="map-x-label"><span>低</span>依恋回避 <span>高 →</span></div></div>;
}
function ScoreCard({
  name,
  value,
  dimension
}) {
  const [expanded, setExpanded] = useState(false);
  const level = scoreLevel(value);
  return <div className={`score-card ${dimension}`}><div className="score-heading"><span>{name}</span><span className="level-tag">{level}</span></div><div className="score-number">{value.toFixed(2)}<span>/ 5</span></div><div className="score-track"><div style={{
        width: `${(value - 1) / 4 * 100}%`
      }} /><i style={{
        left: `${(THRESHOLD - 1) / 4 * 100}%`
      }} /></div><div className="track-labels"><span>1 较低</span><span>5 较高</span></div><p>{explainDimension(dimension, value)}</p><button className="text-button score-more" type="button" aria-expanded={expanded} onClick={() => setExpanded(!expanded)}>{expanded ? '收起维度说明 −' : '了解这个维度 +'}</button>{expanded && <p className="score-detail">{dimension === 'anxiety' ? '这一维度来自 1、3、5、7、9、11 题，关注你对失去连接、不被重视和感情持续性的担忧。' : '这一维度来自 2、4、6、8、10、12 题，关注你在求助、展示脆弱、分享内心和情感依赖时的自在程度。'}分数描述本次作答中的倾向，会随情境变化。</p>}</div>;
}
function Report({
  report,
  onEdit,
  onClear
}) {
  const [copyStatus, setCopyStatus] = useState('');
  const [downloadStatus, setDownloadStatus] = useState('');
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(report.script);
      setCopyStatus('话术已复制，可以按自己的语气调整。');
    } catch {
      setCopyStatus('暂时无法自动复制，你可以直接选中下方文字复制。');
    }
  };
  const download = () => {
    try {
      const url = URL.createObjectURL(new Blob(['\uFEFF' + reportText(report)], {
        type: 'text/plain;charset=utf-8'
      }));
      const link = document.createElement('a');
      link.href = url;
      link.download = '我的依恋观察报告-V3.txt';
      document.body.appendChild(link);
      link.click();
      link.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      setDownloadStatus('报告已生成下载文件。');
    } catch {
      setDownloadStatus('下载暂时不可用，可以使用浏览器的打印功能保存报告。');
    }
  };
  return <article className={`report theme-${report.profile.color}`} aria-labelledby="report-heading"><div className="report-topline"><button className="text-button back-button" onClick={onEdit}><Icon name="back" size={17} />修改我的答案</button><span>12 / 12 · 已完成</span></div><header className="report-header"><div className="eyebrow">YOUR RELATIONSHIP, UNDERSTOOD</div><h1 id="report-heading" tabIndex={-1}>你的亲密关系观察报告</h1><p>这是一份理解自己的起点。你可以带走有共鸣的部分，也可以保留不同意见。</p></header>
    <section className="profile-section"><div className="profile-copy"><span className="section-index">01 / 主要依恋倾向</span><div className="profile-emblem"><Icon name="leaf" size={28} /></div><h2>{report.profile.name}</h2><p className="profile-short">{report.profile.short}</p><p className="profile-description">{report.profile.description}</p><span className="profile-footnote">基于本次回答 · 分界线暂定为 3.25</span></div><AttachmentMap report={report} /></section>
    <section className="report-section"><div className="report-section-heading"><span className="section-index">02 / 两个维度</span><h2>读懂你的靠近与退后</h2><p>分数越高，代表本次回答中对应的感受越突出。</p></div><div className="score-grid"><ScoreCard name="依恋焦虑" value={report.anxiety} dimension="anxiety" /><ScoreCard name="依恋回避" value={report.avoidance} dimension="avoidance" /></div></section>
    <section className="report-section"><div className="report-section-heading"><span className="section-index">03 / 你的具体线索</span><h2>{report.signal === 'low' ? '把已有的自在，继续带进关系' : '哪些时刻，更值得温柔留意'}</h2><p>{report.signal === 'high' ? '下面优先呈现换算后得分较高的题目，帮助你找到更具体的观察入口。' : report.signal === 'moderate' ? '本次没有 4–5 分的突出信号。以下是相对得分较高的情境，仅供进一步观察。' : '本次 12 个情境的换算分均低于 3 分，没有明显的高分触发项。仍可以观察压力或关系变化带来的感受。'}</p></div>{report.observations.length ? <div className="trigger-grid">{report.observations.map((q, i) => <div className="trigger-card" key={q.id}><span className="trigger-order">0{i + 1}</span><h3>{q.trigger}</h3><p>你可以留意，自己是否更需要「{q.need}」。</p><div className="answer-evidence"><span>来自第 {q.id} 题</span><span>原答案 {q.answer}/5{q.reverse ? ` → 反向 ${q.score}/5` : ` · 换算 ${q.score}/5`}</span></div></div>)}</div> : <div className="low-signal-card"><Icon name="leaf" size={26} /><p>你可以回想一次最近的分歧：是什么让你依然感到被在乎？把这些有效的相处方式告诉伴侣，往往比猜测更有帮助。</p></div>}</section>
    <section className="report-section chain-section"><div className="report-section-heading"><span className="section-index">04 / 感受背后的需要</span><h2>试着读懂，一次内心的波动</h2><p>这是一条可供核对的反应链，你可能只符合其中一部分。它无法确定你的实际行为或心理成因。</p></div><ol className="reaction-chain">{report.chain.map((text, i) => <li key={i}><span>{['关系情境', '可能浮现的想法', '可能的感受', '值得观察的反应'][i]}</span><p>{text}</p>{i < 3 && <Icon />}</li>)}</ol><div className="needs-row"><span>背后可能的需要</span><div>{report.needs.map(need => <span className="need-tag" key={need}>{need}</span>)}</div></div></section>
    <section className="report-section myths-section"><div><span className="section-index">05 / 换个角度理解</span><h2>关于这种倾向，<br />你值得知道</h2></div><div className="myth-list">{report.profile.myths.map(myth => <p key={myth}><Icon name="check" size={19} />{myth}</p>)}</div></section>
    <section className="report-section"><div className="report-section-heading"><span className="section-index">06 / 从小小的一步开始</span><h2>给你的三条关系练习</h2><p>选一个最愿意尝试的小动作就好，改变可以慢慢来。</p></div><ol className="tips-list">{report.tips.map((tip, i) => <li key={tip}><span>0{i + 1}</span><p>{tip}</p></li>)}</ol></section>
    <section className="communication-card"><div className="communication-top"><span className="section-index">07 / 让需要被听见</span><Icon name="heart" size={24} /></div><h2>下一次，可以试着这样说</h2><blockquote>{report.script}</blockquote><div className="communication-bottom"><span>在安全、愿意倾听的时刻，用自己的话表达。</span><button className="button secondary" onClick={copy}><Icon name="copy" size={16} />复制沟通话术</button></div><p className="action-status" role="status">{copyStatus}</p></section>
    <div className="report-actions"><button className="button primary" onClick={download}><Icon name="download" size={18} />保存完整报告</button><button className="button secondary" onClick={onEdit}>回看与修改答案</button><button className="text-button" onClick={onClear}>清除本次记录</button><p role="status">{downloadStatus}</p></div>
  </article>;
}
export default function AttachmentApp() {
  const [draft] = useState(readDraft);
  const [answers, setAnswers] = useState(draft.answers);
  const [mode, setMode] = useState(draft.mode);
  const [attempted, setAttempted] = useState(false);
  const [storageOk, setStorageOk] = useState(true);
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        version: VERSION,
        answers,
        mode
      }));
      setStorageOk(true);
    } catch {
      setStorageOk(false);
    }
  }, [answers, mode]);
  useEffect(() => {
    if (mode === 'report') {
      window.scrollTo({
        top: 0
      });
      requestAnimationFrame(() => document.getElementById('report-heading')?.focus({
        preventScroll: true
      }));
    }
  }, [mode]);
  const submit = event => {
    event.preventDefault();
    setAttempted(true);
    const missing = questions.find(q => !answers[q.id]);
    if (missing) {
      const card = document.getElementById(`question-${missing.id}`);
      card?.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
      card?.querySelector('input')?.focus({
        preventScroll: true
      });
      return;
    }
    setMode('report');
  };
  const clear = () => {
    if (!window.confirm('清除当前浏览器中的本次答案和报告，重新开始吗？')) return;
    setAnswers({});
    setAttempted(false);
    setMode('questions');
    window.scrollTo({
      top: 0
    });
  };
  const edit = () => {
    setMode('questions');
    setAttempted(false);
    requestAnimationFrame(() => document.getElementById('questionnaire')?.scrollIntoView({
      block: 'start'
    }));
  };
  const report = mode === 'report' ? buildReport(answers) : null;
  return <div className="within-app"><a href="#main-content" className="skip-link">跳到主要内容</a><header className="site-header"><a href="#" className="brand" aria-label="心有回响 首页" onClick={event => {
        event.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }}><span className="brand-mark"><Icon name="heart" size={22} /></span><span>心有回响<small>WITHIN · RELATIONSHIP STUDIO</small></span></a><div className="header-right"><span className="edition-tag">自我探索系列 <b>01</b></span><a href="#about-test" className="about-link">关于测试<Icon size={14} /></a></div></header><main id="main-content" className="page-shell">{report ? <Report report={report} onEdit={edit} onClear={clear} /> : <Questionnaire answers={answers} onAnswer={(id, value) => setAnswers(current => ({
        ...current,
        [id]: value
      }))} onSubmit={submit} onClear={clear} attempted={attempted} storageOk={storageOk} />}<div id="about-test"><Methodology /></div></main><footer className="site-footer"><span className="footer-brand">心有回响 <span>WITHIN</span></span><p>理解自己，是更好相爱的开始。</p><span>恋爱依恋类型测试 · V3.0</span></footer></div>;
}
