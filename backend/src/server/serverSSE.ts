import { client, channelName } from '../tmi/config'

import express, { Response, Request } from 'express'
import { sendSSE } from './functions'

export interface MessageData {
  mod?: boolean
  vip?: boolean
  subscriber?: boolean
  emoteOnly?: boolean
  messageType?: string
  color?: string
  badges?: {}
  nickName?: string
  message: string
  tags?: {}
}
export const app = express()

app.use('/', express.static('./frontend/'))

app.get('/sse', (req: Request, res: Response) => {
  const headers = {
    'Content-Type': 'text/event-stream',
    Connection: 'keep-alive',
    'Cache-Control': 'no-cache'
  }

  res.writeHead(200, headers)

  client.on('connecting', () => {
    sendSSE(res, 'Connecting to channel')
  })

  client.on('connected', () => {
    sendSSE(res, `Connected to ${channelName}'s chat`)
  })

  client.on('message', (channel, tags, message, self) => {
    const data: MessageData = {
      mod: tags.mod,
      vip: tags.vip,
      subscriber: tags.subscriber,
      emoteOnly: tags.emoteOnly,
      messageType: tags['message-type'],
      color: tags.color,
      badges: tags.badges,
      nickName: tags['display-name'],
      message,
      tags: {}
    }

    sendSSE(res, data)
  })
})
