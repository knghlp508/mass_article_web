import { ref } from 'vue'
import { defineStore } from 'pinia'

export type ThemeColor = 'pink' | 'green'

export const useThemeStore = defineStore('theme', () => {
  const currentTheme = ref<ThemeColor>('pink')

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
  }

  const toggleTheme = () => {
    currentTheme.value = currentTheme.value === 'pink' ? 'green' : 'pink'
  }

  const currentColor = () => {
    return themes[currentTheme.value].primary
  }

  const currentHoverColor = () => {
    return themes[currentTheme.value].primaryHover
  }

  return {
    currentTheme,
    themes,
    setTheme,
    toggleTheme,
    currentColor,
    currentHoverColor
  }
})
