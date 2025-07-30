import { mount } from '@vue/test-utils'
import ThemeToggle from '../../src/components/ThemeToggle.vue'
import { vi } from 'vitest'
import { describe, it, expect } from 'vitest'
import { ref } from 'vue'

vi.mock('../../src/composables/useTheme', () => {
  const theme = ref('light')
  return {
    useTheme: () => ({
      theme,
      toggleTheme: vi.fn(() => (theme.value = theme.value === 'dark' ? 'light' : 'dark')),
    }),
  }
})

describe('ThemeToggle.vue', () => {
  it('alterna entre temas ao clicar', async () => {
    const wrapper = mount(ThemeToggle)
    const button = wrapper.find('button')
    await button.trigger('click')
    expect(button.text()).toMatch(/Modo (Claro|Escuro)/)
  })
})
