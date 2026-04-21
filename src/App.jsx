import React, { useState } from 'react'
import useGameStore from './store/gameStore'
import { events as eventData } from './data/events'
import StartScreen from './components/StartScreen'
import GameScreen from './components/GameScreen'
import EventScreen from './components/EventScreen'
import ResultScreen from './components/ResultScreen'
import EndingScreen from './components/EndingScreen'
import './styles/index.css'

function App() {
  const { player, currentEvent, eventQueue } = useGameStore()
  const [showResult, setShowResult] = useState(false)
  const [lastResult, setLastResult] = useState(null)
  
  // 根据游戏状态渲染不同界面
  const renderScreen = () => {
    if (player.gameStatus === 'idle') {
      return <StartScreen />
    }
    
    if (player.gameStatus === 'ended') {
      return <EndingScreen />
    }
    
    if (currentEvent) {
      return <EventScreen onResult={(result) => {
        setLastResult(result)
        setShowResult(true)
      }} />
    }
    
    if (eventQueue.length === 0 && !currentEvent) {
      // 游戏结束，触发结局
      return <EndingScreen />
    }
    
    return <GameScreen />
  }
  
  return (
    <div className="app">
      <div className="app-header">
        <h1>🍑 淘宝公关模拟器</h1>
        {player.gameStatus === 'playing' && (
          <div className="status-bar">
            <span>第 {player.currentDay} 天</span>
            <span>{player.position}</span>
            <span>声誉：{Math.round(player.metrics.platformReputation)}</span>
          </div>
        )}
      </div>
      
      <div className="app-content">
        {renderScreen()}
      </div>
    </div>
  )
}

export default App
