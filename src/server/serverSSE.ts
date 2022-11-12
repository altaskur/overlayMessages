import { client, channelName } from './../tmi/config'

import express, { Response, Request } from 'express'
import { sendSSE } from './functions'

export interface MessageData {
  nickName?: string
  message: string
  tags?: {}
  color?: string
  badges?: {}
}
export const app = express()

app.use('/', express.static('./src/server/public'))

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
      nickName: tags['display-name'],
      message,
      tags,
      color: tags.color,
      badges: tags.badges
    }

    sendSSE(res, data)
  })
})
