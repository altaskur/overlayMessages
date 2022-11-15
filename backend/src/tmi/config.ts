import tmi from 'tmi.js'

export const channelName = 'altaskur'

export const client = new tmi.Client({
  channels: [channelName]
})
