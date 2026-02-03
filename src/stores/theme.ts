import { ref } from 'vue'
import { defineStore } from 'pinia'

export type ThemeColor = 'pink' | 'green'
export type ThemeMode = 'light' | 'dark'

const STORAGE_KEY_COLOR = 'theme-color'
const STORAGE_KEY_MODE = 'theme-mode'

// 从 localStorage 获取保存的主题
const getStoredColor = (): ThemeColor => {
  const stored = localStorage.getItem(STORAGE_KEY_COLOR)
  if (stored === 'pink' || stored === 'green') {
    return stored
  }
  return 'pink'
}

const getStoredMode = (): ThemeMode => {
  const stored = localStorage.getItem(STORAGE_KEY_MODE)
  if (stored === 'light' || stored === 'dark') {
    return stored
  }
  return 'light'
}

export const useThemeStore = defineStore('theme', () => {
  const currentTheme = ref<ThemeColor>(getStoredColor())
  const currentMode = ref<ThemeMode>(getStoredMode())

  const themes = {
    pink: {
      primary: '#FE3756',
      primaryHover: '#e0324f',
      name: 'pink'
    },
    green: {
      primary: '#A1CE50',
      primaryHover: '#8cb543',
      name: 'green'
    }
  }

  const setTheme = (theme: ThemeColor) => {
    currentTheme.value = theme
    localStorage.setItem(STORAGE_KEY_COLOR, theme)
  }

  const toggleTheme = () => {
    const newTheme = currentTheme.value === 'pink' ? 'green' : 'pink'
    currentTheme.value = newTheme
    localStorage.setItem(STORAGE_KEY_COLOR, newTheme)
  }

  const setMode = (mode: ThemeMode) => {
    currentMode.value = mode
    localStorage.setItem(STORAGE_KEY_MODE, mode)
  }

  const toggleMode = () => {
    const newMode = currentMode.value === 'light' ? 'dark' : 'light'
    currentMode.value = newMode
    localStorage.setItem(STORAGE_KEY_MODE, newMode)
  }

  const currentColor = () => {
    return themes[currentTheme.value].primary
  }

  const currentHoverColor = () => {
    return themes[currentTheme.value].primaryHover
  }

  return {
    currentTheme,
    currentMode,
    themes,
    setTheme,
    toggleTheme,
    setMode,
    toggleMode,
    currentColor,
    currentHoverColor
  }
})
