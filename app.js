const express = require('express');
const { Bot, Viewer, Collector} = require('storybot');
const config = require('./config.json');

const app = express()
const port = 3000


app.get('/', (req, res) => res.send('Смотрим истории'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

let BotController = new Bot({
  dbName: 'storybot'
})

let KirillViewer = new Viewer({
  account: {
    username: config.username,
    password: config.password
  }
})

let KirillCollector = new Collector({
  tokens: [config.tokens]
})


BotController.addBot({
  viewers: [KirillViewer],
  collector: KirillCollector,
  groupIds: [52628657,63206356,56978134],
  name: 'Bot1'
})




BotController.startBots().then(() => {
  console.log('Все боты запущены')
})
