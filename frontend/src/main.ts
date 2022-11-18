import { createBadges } from "./functions/badges/badges"
import { clearMessages, normalizeColor } from "./functions/functions"

const SSE = new EventSource('http://localhost:5174/sse')
SSE.onmessage = (event) => {
  parseMessage(event)
}

function parseMessage (event: MessageEvent<any>): void {
  clearMessages();
  const div: HTMLDivElement | null = document.querySelector('div')
  const appItemDiv = document.createElement('div')
  appItemDiv.classList.add("app-item")
  appItemDiv.classList.add("fadeIn")

  if (div != null) {
    const data = JSON.parse(event.data)
    if (typeof data === 'string') {
      div.innerHTML = data
    } else {

      const badges = document.createElement('div')
      badges.classList.add('badges')

      badges.appendChild(createBadges(data.badges))

      const nickName = document.createElement('span')
      nickName.classList.add('nickName')

      console.log("color: ",data.color)
      data.color = normalizeColor(data.color)
      nickName.style.color = data.color
      nickName.textContent = data.nickName

      const separator = document.createElement('span')
      separator.classList.add('separator')
      separator.textContent = ': '

      const message = document.createElement('span')
      message.classList.add('message')
      message.textContent = data.message

      appItemDiv.append(badges, nickName, separator, message)
      div.appendChild(appItemDiv)
    }
  }
}
