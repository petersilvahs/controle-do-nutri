import { ref } from 'vue'

const theme = ref(localStorage.getItem('theme') || 'light')

export function useTheme() {
  function toggleTheme() {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
    localStorage.setItem('theme', theme.value)
    updateHtmlClass()
  }

  function updateHtmlClass() {
    const html = document.documentElement
    html.classList.toggle('dark', theme.value === 'dark')
  }

  updateHtmlClass()

  return { theme, toggleTheme }
}
