// server.js
const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 8080 })

wss.on('connection', (ws) => {
  console.log('前端已连接')

  const tasks = [
    { id: 1, content: '完成智能计算系统大作业', date: '2025/05/06', completed: false },
    { id: 2, content: '慢跑30分钟', date: '2025/05/06', completed: false },
    { id: 3, content: '阅读30分钟', date: '2025/05/07', completed: false },
    { id: 4, content: '购买猫粮', date: '2025/05/08', completed: false }
  ]

  // 初始推送
  ws.send(JSON.stringify(tasks))

  // 模拟 5 秒后新增任务推送
  setTimeout(() => {
    tasks.push({ id: 5, content: '撸猫30分钟', date: '2025/05/09', completed: false })
    ws.send(JSON.stringify(tasks))
  }, 5000)
})

console.log('WebSocket Server 已启动，端口 8080')
