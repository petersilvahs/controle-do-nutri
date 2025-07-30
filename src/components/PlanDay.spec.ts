import { mount } from '@vue/test-utils'
import PlanDay from '../../src/components/PlanDay.vue'
import { describe, it, expect } from 'vitest'

describe('PlanDay.vue', () => {
  it('exibe corretamente um dia do plano alimentar', () => {
    const day = {
      label: 'Dia 1',
      meals: [
        {
          time: '08:00',
          title: 'Café da Manhã',
          items: ['Ovos — 2', 'Pão integral — 1 fatia'],
        },
      ],
    }

    const wrapper = mount(PlanDay, {
      props: { day },
    })

    expect(wrapper.text()).toContain('Dia 1')
    expect(wrapper.text()).toContain('Café da Manhã')
    expect(wrapper.text()).toContain('Ovos')
    expect(wrapper.text()).toContain('Pão integral')
  })
})
