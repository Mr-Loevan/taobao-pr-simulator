import React, { useEffect, useState } from 'react'
import useGameStore from '../store/gameStore'
import { endings } from '../data/events'

function EndingScreen() {
  const { player, checkEnding, resetGame } = useGameStore()
  const [ending, setEnding] = useState(null)
  
  useEffect(() => {
    const endingId = checkEnding()
    const foundEnding = endings.find(e => e.id === endingId)
    setEnding(foundEnding)
    
    // 标记游戏结束
    const state = useGameStore.getState()
    state.player.gameStatus = 'ended'
  }, [])
  
  const handleRestart = () => {
    if (window.confirm('确定要重新开始游戏吗？')) {
      resetGame()
    }
  }
  
  const handleShare = () => {
    const shareText = `我在淘宝公关模拟器中获得了"${ending?.title}"结局！处理了${player.casesHandled}个事件，成功率${player.casesHandled > 0 ? ((player.successCount / player.casesHandled) * 100).toFixed(1) : 0}%。快来挑战吧！`
    
    if (navigator.share) {
      navigator.share({
        title: '淘宝公关模拟器',
        text: shareText,
        url: window.location.href
      })
    } else {
      navigator.clipboard.writeText(shareText)
      alert('已复制到剪贴板，可以分享到朋友圈啦！')
    }
  }
  
  if (!ending) return null
  
  return (
    <div className="ending-screen">
      <div className="ending-header">
        <h1>🏆 游戏结束</h1>
      </div>
      
      <div className="ending-card">
        <div className="ending-title">{ending.title}</div>
        
        <div className="ending-description">
          {ending.description}
        </div>
        
        <div className="ending-stats">
          <h3>📊 最终数据</h3>
          <div className="stats-grid">
            <div className="stat-box">
              <label>最终职位</label>
              <div className="value">{player.position}</div>
            </div>
            <div className="stat-box">
              <label>处理事件</label>
              <div className="value">{player.casesHandled} 个</div>
            </div>
            <div className="stat-box">
              <label>成功次数</label>
              <div className="value">{player.successCount} 次</div>
            </div>
            <div className="stat-box">
              <label>成功率</label>
              <div className="value">
                {player.casesHandled > 0 
                  ? `${((player.successCount / player.casesHandled) * 100).toFixed(1)}%` 
                  : '-'}
              </div>
            </div>
            <div className="stat-box">
              <label>平台声誉</label>
              <div className="value">{Math.round(player.metrics.platformReputation)}</div>
            </div>
            <div className="stat-box">
              <label>用户信任</label>
              <div className="value">{Math.round(player.metrics.userTrust)}</div>
            </div>
          </div>
        </div>
        
        <div className="ending-history">
          <h3>📜 决策历史</h3>
          <div className="history-list">
            {player.history.slice(-5).map((log, index) => (
              <div key={index} className="history-item">
                <span className="day">第{log.day}天</span>
                <span className="event">{log.eventTitle}</span>
                <span className={`result ${log.result === '成功' ? 'success' : 'failure'}`}>
                  {log.result}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="ending-actions">
        <button className="share-btn" onClick={handleShare}>
          📤 分享结局
        </button>
        <button className="restart-btn" onClick={handleRestart}>
          🔄 重新开始
        </button>
      </div>
    </div>
  )
}

export default EndingScreen
