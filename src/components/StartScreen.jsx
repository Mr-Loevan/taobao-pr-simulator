import React, { useState } from 'react'
import useGameStore from '../store/gameStore'
import { events } from '../data/events'

const departments = [
  { id: 'platform', name: '平台治理部', desc: '负责平台规则制定和商家管理' },
  { id: 'brand', name: '品牌公关部', desc: '负责品牌形象和媒体关系' },
  { id: 'service', name: '客服部', desc: '负责用户服务和投诉处理' }
]

function StartScreen() {
  const [name, setName] = useState('')
  const [selectedDept, setSelectedDept] = useState('')
  const [started, setStarted] = useState(false)
  
  const { setPlayerInfo, initEventQueue } = useGameStore()
  
  const handleStart = () => {
    if (!name.trim() || !selectedDept) {
      alert('请填写姓名并选择部门')
      return
    }
    
    setPlayerInfo(name, selectedDept)
    initEventQueue(events)
    setStarted(true)
  }
  
  return (
    <div className="start-screen">
      <div className="welcome-card">
        <h2>🎮 欢迎来到淘宝公关模拟器</h2>
        
        <div className="intro-text">
          <p>你将扮演一名新入职的<strong>淘宝公关专员</strong>，面对各种突发舆情事件。</p>
          <p>每一次选择都可能影响平台的声誉和你的职业发展。</p>
          <p>你能否化解危机，成为公关界的传奇？</p>
        </div>
        
        {!started ? (
          <div className="form-section">
            <div className="form-group">
              <label>你的姓名</label>
              <input
                type="text"
                placeholder="请输入姓名"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={10}
              />
            </div>
            
            <div className="form-group">
              <label>选择部门</label>
              <div className="dept-selector">
                {departments.map(dept => (
                  <div
                    key={dept.id}
                    className={`dept-option ${selectedDept === dept.id ? 'selected' : ''}`}
                    onClick={() => setSelectedDept(dept.id)}
                  >
                    <div className="dept-name">{dept.name}</div>
                    <div className="dept-desc">{dept.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <button className="start-btn" onClick={handleStart}>
              🚀 开始游戏
            </button>
          </div>
        ) : (
          <div className="loading-hint">
            <p>正在加载事件...</p>
            <p>3 秒后进入游戏</p>
          </div>
        )}
        
        <div className="tips-section">
          <h3>💡 游戏提示</h3>
          <ul>
            <li>每个事件都有时间限制，尽快做出决策</li>
            <li>不同的选择会消耗不同资源，影响不同指标</li>
            <li>你的能力属性会影响决策成功率</li>
            <li>处理好 10 个事件后，将迎来最终结局</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default StartScreen
