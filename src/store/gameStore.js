import { create } from 'zustand'
import { initialPlayerState, positions } from '../data/events'

// 游戏状态管理
const useGameStore = create((set, get) => ({
  // 玩家状态
  player: { ...initialPlayerState },
  
  // 当前事件
  currentEvent: null,
  
  // 事件队列
  eventQueue: [],
  
  // 游戏日志
  logs: [],
  
  // 设置玩家信息
  setPlayerInfo: (name, department) => {
    const randomAttributes = {
      communication: 55 + Math.floor(Math.random() * 10),
      crisisSense: 45 + Math.floor(Math.random() * 10),
      mediaResources: 35 + Math.floor(Math.random() * 10),
      dataAnalysis: 50 + Math.floor(Math.random() * 10)
    }
    
    set(state => ({
      player: {
        ...state.player,
        name,
        department,
        attributes: randomAttributes,
        gameStatus: 'playing',
        currentDay: 1
      }
    }))
  },
  
  // 初始化事件队列
  initEventQueue: (events) => {
    const shuffled = [...events].sort(() => Math.random() - 0.5)
    set({ eventQueue: shuffled.slice(0, 10) })
  },
  
  // 开始下一个事件
  nextEvent: () => {
    const state = get()
    if (state.eventQueue.length === 0) {
      return null
    }
    const event = state.eventQueue[0]
    set({ 
      currentEvent: event,
      eventQueue: state.eventQueue.slice(1)
    })
    return event
  },
  
  // 处理事件决策
  handleDecision: async (option) => {
    const state = get()
    const event = state.currentEvent
    
    // 扣除资源
    const newBudget = state.player.resources.budget - option.cost.budget
    const newMediaContacts = state.player.resources.mediaContacts - option.cost.mediaContacts
    
    // 计算成功率（受玩家属性影响）
    const attributeBonus = (
      state.player.attributes.communication * 0.3 +
      state.player.attributes.crisisSense * 0.3 +
      state.player.attributes.mediaResources * 0.2 +
      state.player.attributes.dataAnalysis * 0.2
    ) / 100
    
    const adjustedChance = Math.min(0.95, option.successChance + attributeBonus * 0.2)
    const isSuccess = Math.random() < adjustedChance
    
    // 计算影响
    const impactMultiplier = isSuccess ? 1 : -0.5
    const reputationChange = option.impact.reputation * impactMultiplier
    const userTrustChange = option.impact.userTrust * impactMultiplier
    const merchantChange = option.impact.merchantSatisfaction * impactMultiplier
    
    // 更新指标
    const newReputation = Math.max(0, Math.min(100, state.player.metrics.platformReputation + reputationChange))
    const newUserTrust = Math.max(0, Math.min(100, state.player.metrics.userTrust + userTrustChange))
    const newMerchant = Math.max(0, Math.min(100, state.player.metrics.merchantSatisfaction + merchantChange))
    
    // 检查晋升
    let newPosition = state.player.position
    let newLevel = state.player.level
    for (const pos of positions) {
      if (newReputation >= pos.minReputation && pos.level > state.player.level) {
        newPosition = pos.title
        newLevel = pos.level
      }
    }
    
    // 添加日志
    const logEntry = {
      day: state.player.currentDay,
      eventId: event.id,
      eventTitle: event.title,
      decision: option.text,
      result: isSuccess ? '成功' : '失败',
      feedback: option.feedback,
      changes: {
        reputation: reputationChange.toFixed(1),
        userTrust: userTrustChange.toFixed(1),
        merchant: merchantChange.toFixed(1)
      }
    }
    
    set({
      player: {
        ...state.player,
        resources: {
          ...state.player.resources,
          budget: newBudget,
          mediaContacts: newMediaContacts
        },
        metrics: {
          platformReputation: newReputation,
          userTrust: newUserTrust,
          merchantSatisfaction: newMerchant
        },
        position: newPosition,
        level: newLevel,
        casesHandled: state.player.casesHandled + 1,
        successCount: state.player.successCount + (isSuccess ? 1 : 0),
        history: [...state.player.history, logEntry],
        currentDay: state.player.currentDay + 1
      },
      currentEvent: null,
      logs: [logEntry, ...state.logs].slice(0, 50)
    })
    
    return {
      isSuccess,
      feedback: option.feedback,
      changes: {
        reputation: reputationChange,
        userTrust: userTrustChange,
        merchant: merchantChange
      }
    }
  },
  
  // 判定结局
  checkEnding: () => {
    const state = get()
    const { platformReputation, userTrust } = state.player.metrics
    const { casesHandled } = state.player
    
    // 简单结局判定逻辑
    if (platformReputation >= 90 && userTrust >= 85 && casesHandled >= 15) {
      return 'ending_01' // 公关之神
    }
    if (platformReputation >= 95 && userTrust >= 90 && casesHandled >= 20) {
      return 'ending_08' // 行业标杆
    }
    if (platformReputation <= 30 && userTrust <= 25) {
      return 'ending_04' // 背锅侠
    }
    if (platformReputation <= 40 && userTrust <= 35) {
      return 'ending_03' // 力不从心
    }
    if (platformReputation <= 50 && userTrust <= 45) {
      return 'ending_07' // 平台衰落
    }
    if (platformReputation >= 75 && userTrust >= 70 && casesHandled >= 12) {
      return 'ending_06' // 创业成功
    }
    if (platformReputation >= 50 && platformReputation <= 75 && casesHandled >= 8) {
      return 'ending_05' // 转行 KOL
    }
    if (platformReputation >= 70 && userTrust >= 65 && casesHandled >= 10) {
      return 'ending_02' // 稳健前行
    }
    
    return 'ending_02' // 默认结局
  },
  
  // 重置游戏
  resetGame: () => {
    set({
      player: { ...initialPlayerState },
      currentEvent: null,
      eventQueue: [],
      logs: []
    })
  },
  
  // 跳过事件
  skipEvent: () => {
    const state = get()
    set({
      player: {
        ...state.player,
        metrics: {
          ...state.player.metrics,
          platformReputation: state.player.metrics.platformReputation - 5,
          userTrust: state.player.metrics.userTrust - 3
        },
        currentDay: state.player.currentDay + 1
      },
      currentEvent: null
    })
  }
}))

export default useGameStore
