export function normalizeColor (color: string): string {
  return color === '#000000' ? '#a0a0a0' : color
}

export function clearMessages (): void {
  // TODO esto es nuevo
  const app = document.querySelector('#app') as HTMLDivElement

  const appElements: number = app.childElementCount

  if (appElements >= 5) {
    const lastElement = app.querySelectorAll('.app-item')[0]
    lastElement.classList.remove('fadeIn')
    lastElement.classList.add('fadeOut')

    setTimeout(() => {
      lastElement.remove()
    }, 2100)
  }
}
