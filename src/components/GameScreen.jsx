import React from 'react'
import useGameStore from '../store/gameStore'

function GameScreen() {
  const { player, nextEvent } = useGameStore()
  
  const handleNext = () => {
    nextEvent()
  }
  
  return (
    <div className="game-screen">
      <div className="player-status">
        <h3>📊 当前状态</h3>
        
        <div className="status-grid">
          <div className="status-item">
            <label>平台声誉</label>
            <div className="progress-bar">
              <div 
                className="progress-fill reputation" 
                style={{ width: `${player.metrics.platformReputation}%` }}
              />
            </div>
            <span>{Math.round(player.metrics.platformReputation)}/100</span>
          </div>
          
          <div className="status-item">
            <label>用户信任度</label>
            <div className="progress-bar">
              <div 
                className="progress-fill trust" 
                style={{ width: `${player.metrics.userTrust}%` }}
              />
            </div>
            <span>{Math.round(player.metrics.userTrust)}/100</span>
          </div>
          
          <div className="status-item">
            <label>商家满意度</label>
            <div className="progress-bar">
              <div 
                className="progress-fill merchant" 
                style={{ width: `${player.metrics.merchantSatisfaction}%` }}
              />
            </div>
            <span>{Math.round(player.metrics.merchantSatisfaction)}/100</span>
          </div>
        </div>
        
        <div className="resources-section">
          <h4>💰 资源</h4>
          <div className="resource-list">
            <div className="resource-item">
              <span>预算：</span>
              <span className="value">¥{(player.resources.budget / 10000).toFixed(1)}万</span>
            </div>
            <div className="resource-item">
              <span>媒体关系：</span>
              <span className="value">{player.resources.mediaContacts}</span>
            </div>
            <div className="resource-item">
              <span>法务支持：</span>
              <span className="value">{player.resources.legalSupport} 次</span>
            </div>
            <div className="resource-item">
              <span>技术支持：</span>
              <span className="value">{player.resources.techTeam} 次</span>
            </div>
          </div>
        </div>
        
        <div className="attributes-section">
          <h4>🎯 能力属性</h4>
          <div className="attribute-list">
            <div className="attribute-item">
              <span>沟通能力：</span>
              <span className="value">{player.attributes.communication}</span>
            </div>
            <div className="attribute-item">
              <span>危机敏感度：</span>
              <span className="value">{player.attributes.crisisSense}</span>
            </div>
            <div className="attribute-item">
              <span>媒体资源：</span>
              <span className="value">{player.attributes.mediaResources}</span>
            </div>
            <div className="attribute-item">
              <span>数据分析：</span>
              <span className="value">{player.attributes.dataAnalysis}</span>
            </div>
          </div>
        </div>
        
        <div className="stats-section">
          <h4>📈 统计数据</h4>
          <div className="stats-grid">
            <div className="stat-item">
              <label>已处理事件</label>
              <span className="value">{player.casesHandled}</span>
            </div>
            <div className="stat-item">
              <label>成功次数</label>
              <span className="value">{player.successCount}</span>
            </div>
            <div className="stat-item">
              <label>成功率</label>
              <span className="value">
                {player.casesHandled > 0 
                  ? `${((player.successCount / player.casesHandled) * 100).toFixed(1)}%` 
                  : '-'}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <button className="next-event-btn" onClick={handleNext}>
        ⚡ 处理下一个事件
      </button>
    </div>
  )
}

export default GameScreen
