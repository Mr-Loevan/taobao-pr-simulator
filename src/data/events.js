// 舆情事件库 - 包含 30+ 个分级事件

export const events = [
  // ========== 初级事件（难度 1-3）==========
  {
    id: 'E001',
    title: '消费者投诉商品质量问题',
    description: '一位消费者在微博发文，称在淘宝购买的电子产品存在安全隐患，使用不到一周就出现故障，要求平台给出说法。目前转发量约 200 次。',
    difficulty: '初级',
    initialHeat: 30,
    heatGrowthRate: 5,
    timeLimit: 48, // 小时
    options: [
      {
        id: 'A',
        text: '立即联系消费者道歉并退款',
        cost: { budget: 5000, mediaContacts: 0 },
        successChance: 0.7,
        impact: { reputation: 5, userTrust: 3, merchantSatisfaction: -2 },
        feedback: '消费者接受了道歉，删除了帖子并表示理解。'
      },
      {
        id: 'B',
        text: '要求商家先行赔付并发布声明',
        cost: { budget: 2000, mediaContacts: 2 },
        successChance: 0.6,
        impact: { reputation: 3, userTrust: 5, merchantSatisfaction: -5 },
        feedback: '商家配合赔付，但部分商家抱怨平台偏袒消费者。'
      },
      {
        id: 'C',
        text: '等待商家处理，平台观望',
        cost: { budget: 0, mediaContacts: 0 },
        successChance: 0.3,
        impact: { reputation: -10, userTrust: -8, merchantSatisfaction: 3 },
        feedback: '消费者认为平台推诿责任，事件持续发酵。'
      }
    ]
  },
  {
    id: 'E002',
    title: '快递延误引发客诉',
    description: '双十一期间，大量用户反映订单物流停滞，客服排队超过 2 小时。有用户在小红书发帖吐槽"淘宝物流太让人失望"。',
    difficulty: '初级',
    initialHeat: 25,
    heatGrowthRate: 8,
    timeLimit: 24,
    options: [
      {
        id: 'A',
        text: '发布物流情况说明并补偿优惠券',
        cost: { budget: 50000, mediaContacts: 3 },
        successChance: 0.75,
        impact: { reputation: 4, userTrust: 6, merchantSatisfaction: 2 },
        feedback: '用户对补偿方案表示认可，负面情绪得到缓解。'
      },
      {
        id: 'B',
        text: '督促物流公司加快配送',
        cost: { budget: 10000, mediaContacts: 5 },
        successChance: 0.5,
        impact: { reputation: 2, userTrust: 2, merchantSatisfaction: 3 },
        feedback: '物流有所改善，但已延误的订单仍引发不满。'
      },
      {
        id: 'C',
        text: '关闭评论区，控制负面声音',
        cost: { budget: 5000, mediaContacts: 8 },
        successChance: 0.2,
        impact: { reputation: -15, userTrust: -12, merchantSatisfaction: -5 },
        feedback: '删评行为被曝光，引发更大规模的抵制。'
      }
    ]
  },
  {
    id: 'E003',
    title: '主播带货翻车',
    description: '某头部主播在直播间推荐的美容仪被质疑虚假宣传，实际效果与描述不符。消费者要求"退一赔三"。',
    difficulty: '初级',
    initialHeat: 40,
    heatGrowthRate: 12,
    timeLimit: 36,
    options: [
      {
        id: 'A',
        text: '下架商品并启动赔付程序',
        cost: { budget: 100000, mediaContacts: 5 },
        successChance: 0.8,
        impact: { reputation: 6, userTrust: 8, merchantSatisfaction: -3 },
        feedback: '快速赔付赢得用户信任，但商家和主播表示不满。'
      },
      {
        id: 'B',
        text: '要求主播团队自行处理',
        cost: { budget: 10000, mediaContacts: 2 },
        successChance: 0.4,
        impact: { reputation: -5, userTrust: -6, merchantSatisfaction: 5 },
        feedback: '主播回应迟缓，舆论认为平台监管不力。'
      },
      {
        id: 'C',
        text: '委托第三方机构检测产品',
        cost: { budget: 30000, mediaContacts: 4 },
        successChance: 0.6,
        impact: { reputation: 3, userTrust: 4, merchantSatisfaction: 0 },
        feedback: '检测结果需要时间，期间质疑声不断。'
      }
    ]
  },
  {
    id: 'E004',
    title: '商家刷单被曝光',
    description: '有媒体调查发现部分淘宝店铺存在刷单行为，销量和好评都是假的。报道标题："淘宝假货屡禁不止"。',
    difficulty: '初级',
    initialHeat: 35,
    heatGrowthRate: 10,
    timeLimit: 48,
    options: [
      {
        id: 'A',
        text: '成立专项组彻查并公示结果',
        cost: { budget: 80000, mediaContacts: 6 },
        successChance: 0.7,
        impact: { reputation: 5, userTrust: 7, merchantSatisfaction: -8 },
        feedback: '查处了一批违规商家，但被指"治标不治本"。'
      },
      {
        id: 'B',
        text: '否认报道内容，发律师函',
        cost: { budget: 20000, mediaContacts: 8 },
        successChance: 0.25,
        impact: { reputation: -12, userTrust: -10, merchantSatisfaction: 2 },
        feedback: '媒体放出更多证据，平台陷入被动。'
      },
      {
        id: 'C',
        text: '升级反作弊系统',
        cost: { budget: 150000, mediaContacts: 3 },
        successChance: 0.65,
        impact: { reputation: 4, userTrust: 5, merchantSatisfaction: -5 },
        feedback: '技术投入获得认可，但见效需要时间。'
      }
    ]
  },
  {
    id: 'E005',
    title: '客服态度恶劣被录音',
    description: '用户与客服的通话录音在抖音传播，客服言语不耐烦甚至辱骂用户。#淘宝客服素质#登上热搜。',
    difficulty: '初级',
    initialHeat: 45,
    heatGrowthRate: 15,
    timeLimit: 24,
    options: [
      {
        id: 'A',
        text: '开除涉事客服并公开道歉',
        cost: { budget: 10000, mediaContacts: 5 },
        successChance: 0.75,
        impact: { reputation: 3, userTrust: 4, merchantSatisfaction: 0 },
        feedback: '果断处理平息了部分怒火，但有人质疑是"临时工背锅"。'
      },
      {
        id: 'B',
        text: '解释客服工作强度大，请求理解',
        cost: { budget: 5000, mediaContacts: 3 },
        successChance: 0.3,
        impact: { reputation: -8, userTrust: -10, merchantSatisfaction: -2 },
        feedback: '卖惨式公关引发更大反感。'
      },
      {
        id: 'C',
        text: '宣布客服体系全面升级',
        cost: { budget: 200000, mediaContacts: 6 },
        successChance: 0.7,
        impact: { reputation: 6, userTrust: 7, merchantSatisfaction: 3 },
        feedback: '系统性改进方案获得认可。'
      }
    ]
  },

  // ========== 中级事件（难度 4-6）==========
  {
    id: 'E006',
    title: '大数据杀熟质疑',
    description: '多名用户发现同一商品在不同账号显示不同价格，老用户价格更高。微博话题"淘宝大数据杀熟"阅读量突破 500 万。',
    difficulty: '中级',
    initialHeat: 60,
    heatGrowthRate: 20,
    timeLimit: 36,
    options: [
      {
        id: 'A',
        text: '否认杀熟，解释为优惠券差异',
        cost: { budget: 20000, mediaContacts: 8 },
        successChance: 0.35,
        impact: { reputation: -10, userTrust: -15, merchantSatisfaction: 0 },
        feedback: '解释被认为是在狡辩，信任危机加剧。'
      },
      {
        id: 'B',
        text: '承认算法存在问题并整改',
        cost: { budget: 100000, mediaContacts: 10 },
        successChance: 0.6,
        impact: { reputation: 2, userTrust: 5, merchantSatisfaction: -3 },
        feedback: '坦诚态度获得部分认可，但要求赔偿的呼声高涨。'
      },
      {
        id: 'C',
        text: '邀请用户代表参与算法监督',
        cost: { budget: 150000, mediaContacts: 12 },
        successChance: 0.7,
        impact: { reputation: 8, userTrust: 10, merchantSatisfaction: -2 },
        feedback: '创新举措受到媒体好评，树立开放形象。'
      }
    ]
  },
  {
    id: 'E007',
    title: '二选一垄断风波',
    description: '市场监管总局收到举报，称淘宝强迫商家"二选一"，不能在拼多多等其他平台开店。',
    difficulty: '中级',
    initialHeat: 70,
    heatGrowthRate: 25,
    timeLimit: 72,
    options: [
      {
        id: 'A',
        text: '积极配合调查，提供材料',
        cost: { budget: 50000, mediaContacts: 5 },
        successChance: 0.5,
        impact: { reputation: 0, userTrust: 2, merchantSatisfaction: 5 },
        feedback: '调查结果待定，商家关系有所缓和。'
      },
      {
        id: 'B',
        text: '声称是商家自愿选择',
        cost: { budget: 30000, mediaContacts: 10 },
        successChance: 0.25,
        impact: { reputation: -15, userTrust: -8, merchantSatisfaction: -10 },
        feedback: '说辞被内部邮件打脸，舆论哗然。'
      },
      {
        id: 'C',
        text: '主动调整平台政策，取消限制',
        cost: { budget: 200000, mediaContacts: 8 },
        successChance: 0.75,
        impact: { reputation: 10, userTrust: 8, merchantSatisfaction: 15 },
        feedback: '政策调整获得多方赞誉，化危机为转机。'
      }
    ]
  },
  {
    id: 'E008',
    title: '用户数据泄露疑云',
    description: '暗网出现号称包含淘宝用户信息的数据库，涉及手机号、地址等隐私数据。安全专家呼吁平台回应。',
    difficulty: '中级',
    initialHeat: 80,
    heatGrowthRate: 30,
    timeLimit: 24,
    options: [
      {
        id: 'A',
        text: '否认泄露，称数据系伪造',
        cost: { budget: 50000, mediaContacts: 10 },
        successChance: 0.4,
        impact: { reputation: -5, userTrust: -12, merchantSatisfaction: 0 },
        feedback: '专家分析数据真实性后，质疑声更甚。'
      },
      {
        id: 'B',
        text: '报警并邀请第三方审计',
        cost: { budget: 300000, mediaContacts: 15 },
        successChance: 0.65,
        impact: { reputation: 5, userTrust: 3, merchantSatisfaction: 2 },
        feedback: '强硬姿态暂时稳住局面，等待审计结果。'
      },
      {
        id: 'C',
        text: '通知用户修改密码并提供保护服务',
        cost: { budget: 500000, mediaContacts: 12 },
        successChance: 0.7,
        impact: { reputation: 8, userTrust: 10, merchantSatisfaction: 3 },
        feedback: '负责任的态度赢得用户认可。'
      }
    ]
  },
  {
    id: 'E009',
    title: '假货产业链曝光',
    description: '央视记者卧底调查发现，某产业带存在完整的假货生产 - 销售链条，通过淘宝销往全国。',
    difficulty: '中级',
    initialHeat: 85,
    heatGrowthRate: 35,
    timeLimit: 48,
    options: [
      {
        id: 'A',
        text: '连夜下架相关商品并封店',
        cost: { budget: 100000, mediaContacts: 8 },
        successChance: 0.55,
        impact: { reputation: 2, userTrust: 5, merchantSatisfaction: -15 },
        feedback: '快速行动但被指"马后炮"。'
      },
      {
        id: 'B',
        text: '联合警方打击制假窝点',
        cost: { budget: 500000, mediaContacts: 15 },
        successChance: 0.75,
        impact: { reputation: 12, userTrust: 10, merchantSatisfaction: -5 },
        feedback: '雷霆行动获得官方和民众双重认可。'
      },
      {
        id: 'C',
        text: '声称是个别现象，已严肃处理',
        cost: { budget: 50000, mediaContacts: 10 },
        successChance: 0.3,
        impact: { reputation: -18, userTrust: -15, merchantSatisfaction: -8 },
        feedback: '轻描淡写引发更大愤怒。'
      }
    ]
  },
  {
    id: 'E010',
    title: '促销规则复杂遭吐槽',
    description: '双十二预售规则过于复杂，用户计算优惠堪比高考数学。#淘宝数学题#登上热搜第一。',
    difficulty: '中级',
    initialHeat: 55,
    heatGrowthRate: 18,
    timeLimit: 36,
    options: [
      {
        id: 'A',
        text: '简化规则，直接打折',
        cost: { budget: 300000, mediaContacts: 5 },
        successChance: 0.8,
        impact: { reputation: 8, userTrust: 10, merchantSatisfaction: -5 },
        feedback: '简单粗暴的优惠最得人心。'
      },
      {
        id: 'B',
        text: '发布攻略教程教用户计算',
        cost: { budget: 50000, mediaContacts: 8 },
        successChance: 0.4,
        impact: { reputation: -3, userTrust: -5, merchantSatisfaction: 3 },
        feedback: '教程被吐槽"把简单问题复杂化"。'
      },
      {
        id: 'C',
        text: '举办"最优解"大赛增加趣味性',
        cost: { budget: 200000, mediaContacts: 10 },
        successChance: 0.5,
        impact: { reputation: 3, userTrust: 2, merchantSatisfaction: 5 },
        feedback: '营销活动转移了部分注意力，但核心问题未解决。'
      }
    ]
  },

  // ========== 高级事件（难度 7-10）==========
  {
    id: 'E011',
    title: '315 晚会点名',
    description: '央视 315 晚会曝光淘宝平台存在多个严重问题：假货、虚假宣传、售后推诿。主持人直言"让消费者如何信任你"。',
    difficulty: '高级',
    initialHeat: 100,
    heatGrowthRate: 50,
    timeLimit: 24,
    options: [
      {
        id: 'A',
        text: 'CEO 连夜发布致歉信',
        cost: { budget: 200000, mediaContacts: 20 },
        successChance: 0.5,
        impact: { reputation: 5, userTrust: 3, merchantSatisfaction: -5 },
        feedback: '道歉及时但被指缺乏具体措施。'
      },
      {
        id: 'B',
        text: '宣布十项整改措施并设立百亿基金',
        cost: { budget: 10000000, mediaContacts: 25 },
        successChance: 0.75,
        impact: { reputation: 15, userTrust: 12, merchantSatisfaction: -10 },
        feedback: '大手笔投入展现决心，舆论开始转向。'
      },
      {
        id: 'C',
        text: '保持沉默，冷处理',
        cost: { budget: 0, mediaContacts: 0 },
        successChance: 0.1,
        impact: { reputation: -30, userTrust: -25, merchantSatisfaction: -15 },
        feedback: '沉默被视为傲慢，品牌形象跌入谷底。'
      }
    ]
  },
  {
    id: 'E012',
    title: '监管约谈',
    description: '国家市场监管总局等八部门联合约谈阿里巴巴，要求限期整改。股价应声下跌 8%。',
    difficulty: '高级',
    initialHeat: 95,
    heatGrowthRate: 45,
    timeLimit: 72,
    options: [
      {
        id: 'A',
        text: '全面配合监管要求',
        cost: { budget: 500000, mediaContacts: 15 },
        successChance: 0.7,
        impact: { reputation: 8, userTrust: 5, merchantSatisfaction: 3 },
        feedback: '配合态度获得监管部门认可。'
      },
      {
        id: 'B',
        text: '游说争取缓冲期',
        cost: { budget: 2000000, mediaContacts: 30 },
        successChance: 0.4,
        impact: { reputation: -10, userTrust: -8, merchantSatisfaction: 5 },
        feedback: '操作被曝光后雪上加霜。'
      },
      {
        id: 'C',
        text: '主动提出行业自律倡议',
        cost: { budget: 1000000, mediaContacts: 20 },
        successChance: 0.65,
        impact: { reputation: 12, userTrust: 8, merchantSatisfaction: 10 },
        feedback: '化被动为主动，树立行业领导者形象。'
      }
    ]
  },
  {
    id: 'E013',
    title: '大规模裁员传闻',
    description: '脉脉爆料淘宝将进行"史上最大规模裁员"，比例高达 30%。员工人心惶惶，猎头电话被打爆。',
    difficulty: '高级',
    initialHeat: 75,
    heatGrowthRate: 40,
    timeLimit: 48,
    options: [
      {
        id: 'A',
        text: '官方辟谣：正常组织优化',
        cost: { budget: 100000, mediaContacts: 12 },
        successChance: 0.45,
        impact: { reputation: -5, userTrust: 0, merchantSatisfaction: 0 },
        feedback: '辟谣效果有限，猜测仍在继续。'
      },
      {
        id: 'B',
        text: '召开全员大会稳定军心',
        cost: { budget: 200000, mediaContacts: 8 },
        successChance: 0.6,
        impact: { reputation: 3, userTrust: 2, merchantSatisfaction: 3 },
        feedback: '内部沟通缓解了恐慌情绪。'
      },
      {
        id: 'C',
        text: '不回应，让传闻自然消散',
        cost: { budget: 0, mediaContacts: 0 },
        successChance: 0.3,
        impact: { reputation: -8, userTrust: -5, merchantSatisfaction: -5 },
        feedback: '沉默加剧了不确定性。'
      }
    ]
  },
  {
    id: 'E014',
    title: '竞争对手恶意攻击',
    description: '有组织的黑稿在各平台传播，声称"淘宝即将倒闭"。IP 地址指向某竞争对手公司。',
    difficulty: '高级',
    initialHeat: 65,
    heatGrowthRate: 35,
    timeLimit: 36,
    options: [
      {
        id: 'A',
        text: '发声明谴责不正当竞争',
        cost: { budget: 150000, mediaContacts: 15 },
        successChance: 0.5,
        impact: { reputation: 0, userTrust: 2, merchantSatisfaction: 3 },
        feedback: '声明被淹没在信息流中，效果有限。'
      },
      {
        id: 'B',
        text: '起诉对方诽谤',
        cost: { budget: 500000, mediaContacts: 20 },
        successChance: 0.6,
        impact: { reputation: 5, userTrust: 3, merchantSatisfaction: 2 },
        feedback: '法律手段震慑了对手，但过程漫长。'
      },
      {
        id: 'C',
        text: '用业绩数据正面回应',
        cost: { budget: 100000, mediaContacts: 18 },
        successChance: 0.75,
        impact: { reputation: 10, userTrust: 8, merchantSatisfaction: 5 },
        feedback: '事实胜于雄辩，谣言不攻自破。'
      }
    ]
  },
  {
    id: 'E015',
    title: '平台规则突变引众怒',
    description: '淘宝突然调整搜索算法，中小商家流量暴跌 80%。商家群情激愤，集体到总部抗议。',
    difficulty: '高级',
    initialHeat: 80,
    heatGrowthRate: 40,
    timeLimit: 48,
    options: [
      {
        id: 'A',
        text: '恢复原算法并致歉',
        cost: { budget: 300000, mediaContacts: 10 },
        successChance: 0.65,
        impact: { reputation: 5, userTrust: 3, merchantSatisfaction: 15 },
        feedback: '及时纠错挽回商家信任。'
      },
      {
        id: 'B',
        text: '坚持新算法，提供培训适应',
        cost: { budget: 500000, mediaContacts: 12 },
        successChance: 0.4,
        impact: { reputation: -8, userTrust: -5, merchantSatisfaction: -20 },
        feedback: '强硬态度导致商家流失。'
      },
      {
        id: 'C',
        text: '分阶段过渡，设置缓冲期',
        cost: { budget: 400000, mediaContacts: 15 },
        successChance: 0.7,
        impact: { reputation: 8, userTrust: 5, merchantSatisfaction: 10 },
        feedback: '折中方案平衡了各方利益。'
      }
    ]
  }
];

// 结局配置
export const endings = [
  {
    id: 'ending_01',
    title: '公关之神',
    description: '你以完美的表现化解了所有危机，平台声誉达到历史新高。你被任命为集团首席公关官，成为行业标杆人物。',
    condition: { minReputation: 90, minUserTrust: 85, casesHandled: 15 },
    image: '/endings/god.png'
  },
  {
    id: 'ending_02',
    title: '稳健前行',
    description: '你在任期内表现稳定，平台平稳发展。虽然没有惊天动地的成就，但也无重大失误，继续担任公关总监。',
    condition: { minReputation: 70, minUserTrust: 65, casesHandled: 10 },
    image: '/endings/stable.png'
  },
  {
    id: 'ending_03',
    title: '力不从心',
    description: '危机频发让你疲于应对，最终因一次重大失误引咎辞职。离开时你说："这届网友太难带了。"',
    condition: { minReputation: 40, minUserTrust: 35 },
    image: '/endings/resign.png'
  },
  {
    id: 'ending_04',
    title: '背锅侠',
    description: '平台遭遇系统性危机，你成为完美的替罪羊。离职声明写道："个人原因辞去职务"。',
    condition: { minReputation: 30, minUserTrust: 25 },
    image: '/endings/scapegoat.png'
  },
  {
    id: 'ending_05',
    title: '转行 KOL',
    description: '经历多次危机后，你决定离开大厂，成为自媒体博主，专门分享"我在淘宝做公关那些年"。',
    condition: { minReputation: 50, maxReputation: 75, casesHandled: 8 },
    image: '/endings/kol.png'
  },
  {
    id: 'ending_06',
    title: '创业成功',
    description: '在淘宝积累的经验和人脉让你决定创业，成立了一家公关咨询公司，客户排到明年。',
    condition: { minReputation: 75, minUserTrust: 70, casesHandled: 12 },
    image: '/endings/entrepreneur.png'
  },
  {
    id: 'ending_07',
    title: '平台衰落',
    description: '由于多次危机处理不当，淘宝市场份额大幅下滑，被拼多多超越。你见证了电商格局的历史性变化。',
    condition: { maxReputation: 50, maxUserTrust: 45 },
    image: '/endings/decline.png'
  },
  {
    id: 'ending_08',
    title: '行业标杆',
    description: '你的危机处理案例被写入哈佛商学院教材，"淘宝模式"成为全球企业学习的对象。',
    condition: { minReputation: 95, minUserTrust: 90, casesHandled: 20 },
    image: '/endings/legend.png'
  }
];

// 初始玩家状态
export const initialPlayerState = {
  name: '',
  department: '',
  position: '公关专员',
  level: 1,
  attributes: {
    communication: 60,
    crisisSense: 50,
    mediaResources: 40,
    dataAnalysis: 55
  },
  resources: {
    budget: 500000,
    mediaContacts: 20,
    legalSupport: 5,
    techTeam: 3
  },
  metrics: {
    platformReputation: 75,
    userTrust: 70,
    merchantSatisfaction: 65
  },
  casesHandled: 0,
  successCount: 0,
  currentDay: 1,
  history: [],
  gameStatus: 'idle' // idle, playing, ended
};

// 职位晋升路径
export const positions = [
  { level: 1, title: '公关专员', minReputation: 0 },
  { level: 2, title: '高级专员', minReputation: 20 },
  { level: 3, title: '主管', minReputation: 35 },
  { level: 4, title: '经理', minReputation: 50 },
  { level: 5, title: '高级经理', minReputation: 65 },
  { level: 6, title: '总监', minReputation: 80 },
  { level: 7, title: '副总裁', minReputation: 90 },
  { level: 8, title: 'CEO', minReputation: 95 }
];
