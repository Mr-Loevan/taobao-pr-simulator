import React from 'react'

function ResultScreen({ result, onNext }) {
  if (!result) return null
  
  return (
    <div className={`result-screen ${result.isSuccess ? 'success' : 'failure'}`}>
      <div className="result-icon">
        {result.isSuccess ? '✅' : '❌'}
      </div>
      
      <h2>{result.isSuccess ? '处理成功！' : '处理失败'}</h2>
      
      <div className="result-feedback">
        {result.feedback}
      </div>
      
      <div className="result-changes">
        <div className={`change-item ${result.changes.reputation >= 0 ? 'positive' : 'negative'}`}>
          <span>声誉值</span>
          <span>{result.changes.reputation >= 0 ? '+' : ''}{result.changes.reputation.toFixed(1)}</span>
        </div>
        <div className={`change-item ${result.changes.userTrust >= 0 ? 'positive' : 'negative'}`}>
          <span>用户信任</span>
          <span>{result.changes.userTrust >= 0 ? '+' : ''}{result.changes.userTrust.toFixed(1)}</span>
        </div>
        <div className={`change-item ${result.changes.merchant >= 0 ? 'positive' : 'negative'}`}>
          <span>商家满意度</span>
          <span>{result.changes.merchant >= 0 ? '+' : ''}{result.changes.merchant.toFixed(1)}</span>
        </div>
      </div>
      
      <button className="continue-btn" onClick={onNext}>
        继续下一个事件 →
      </button>
    </div>
  )
}

export default ResultScreen
