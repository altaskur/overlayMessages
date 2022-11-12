import { Response } from 'express'
import { MessageData } from './serverSSE'

export function sendSSE (res: Response, message: MessageData | string): void {
  console.log('sendSSE: ', message)
  res.write(createMessage(message))
  console.log('Message sent')
}

function createMessage (data: string | [] | {}): string {
  const body = JSON.stringify(data)
  const header: string = 'data: '
  const footer: string = '\n\n'
  console.log('message: ', header + body + footer)
  return `${header}${body}${footer}`
}
