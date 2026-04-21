import React, { useState } from 'react'
import useGameStore from '../store/gameStore'

function EventScreen({ onResult }) {
  const { currentEvent, handleDecision, skipEvent } = useGameStore()
  const [selectedOption, setSelectedOption] = useState(null)
  const [processing, setProcessing] = useState(false)
  
  if (!currentEvent) return null
  
  const difficultyColors = {
    '初级': '#52c41a',
    '中级': '#faad14',
    '高级': '#f5222d'
  }
  
  const handleConfirm = async () => {
    if (!selectedOption) return
    
    setProcessing(true)
    const result = await handleDecision(selectedOption)
    setProcessing(false)
    onResult(result)
  }
  
  const handleSkip = () => {
    if (window.confirm('确定要跳过这个事件吗？跳过会降低声誉值。')) {
      skipEvent()
    }
  }
  
  return (
    <div className="event-screen">
      <div className="event-header">
        <span 
          className="difficulty-tag"
          style={{ backgroundColor: difficultyColors[currentEvent.difficulty] }}
        >
          {currentEvent.difficulty}
        </span>
        <span className="time-limit">⏰ {currentEvent.timeLimit}小时内响应</span>
      </div>
      
      <h2 className="event-title">{currentEvent.title}</h2>
      
      <div className="event-description">
        {currentEvent.description}
      </div>
      
      <div className="heat-indicator">
        <span>🔥 初始热度：{currentEvent.initialHeat}</span>
        <span>📈 增长速度：+{currentEvent.heatGrowthRate}/小时</span>
      </div>
      
      <div className="options-section">
        <h3>请选择应对策略：</h3>
        
        <div className="options-list">
          {currentEvent.options.map((option, index) => (
            <div
              key={option.id}
              className={`option-card ${selectedOption?.id === option.id ? 'selected' : ''}`}
              onClick={() => setSelectedOption(option)}
            >
              <div className="option-header">
                <span className="option-label">选项 {String.fromCharCode(65 + index)}</span>
                <span className="success-rate">
                  成功率：{Math.round(option.successChance * 100)}%
                </span>
              </div>
              
              <div className="option-text">{option.text}</div>
              
              <div className="option-cost">
                <span>💰 预算：¥{(option.cost.budget / 10000).toFixed(1)}万</span>
                <span>📞 媒体关系：-{option.cost.mediaContacts}</span>
              </div>
              
              <div className="option-impact">
                <span className={option.impact.reputation >= 0 ? 'positive' : 'negative'}>
                  声誉：{option.impact.reputation >= 0 ? '+' : ''}{option.impact.reputation}
                </span>
                <span className={option.impact.userTrust >= 0 ? 'positive' : 'negative'}>
                  信任：{option.impact.userTrust >= 0 ? '+' : ''}{option.impact.userTrust}
                </span>
                <span className={option.impact.merchantSatisfaction >= 0 ? 'positive' : 'negative'}>
                  商家：{option.impact.merchantSatisfaction >= 0 ? '+' : ''}{option.impact.merchantSatisfaction}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="action-buttons">
        <button 
          className="confirm-btn"
          disabled={!selectedOption || processing}
          onClick={handleConfirm}
        >
          {processing ? '处理中...' : '✅ 确认执行'}
        </button>
        
        <button 
          className="skip-btn"
          onClick={handleSkip}
        >
          ⏭️ 跳过
        </button>
      </div>
    </div>
  )
}

export default EventScreen
