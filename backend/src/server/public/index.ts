import parseBadges from './functions'

const SSE = new EventSource('http://localhost:5173/sse')
SSE.onmessage = (event) => {
  parseMessage(event)
}

function parseMessage (event: MessageEvent<any>): void {
  const div: HTMLDivElement | null = document.querySelector('div')
  if (div != null) {
    const data = JSON.parse(event.data)

    if (typeof data === 'string') {
      div.innerHTML = data
    } else {
      parseBadges(data.badge)
      const badges = document.createElement('div')
      badges.classList.add('badges')
      badges.textContent = data.badges

      const nickName = document.createElement('span')
      nickName.classList.add('nickName')
      nickName.style.color = data.color
      nickName.textContent = data.nickName

      const separator = document.createElement('span')
      separator.classList.add('separator')
      separator.textContent = ': '

      const message = document.createElement('span')
      message.classList.add('message')
      message.textContent = data.message

      div.append(badges, nickName, separator, message)
    }
  }
}
