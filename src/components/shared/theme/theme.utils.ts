import type { ITheme } from '.'

export function getTheme(): ITheme {
  if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
    return localStorage.getItem('theme') as ITheme
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

export function toggleTheme(): void {
  const oldTheme = getTheme()
  const newTheme = oldTheme === 'light' ? 'dark' : 'light'

  document.documentElement.classList.remove('light', 'dark')
  document.documentElement.classList.add(newTheme)

  localStorage.setItem('theme', newTheme)
}
