import { mount } from '@vue/test-utils'
import PlanHistory from '../../src/components/PlanHistory.vue'
import { describe, it, expect } from 'vitest'

describe('PlanHistory.vue', () => {
  it('renderiza os planos alimentares passados via prop', () => {
    const plans = [
      { id: 1, description: 'Plano A', date: '2025-07-25' },
      { id: 2, description: 'Plano B', date: '2025-07-26' },
    ]
    const wrapper = mount(PlanHistory, {
      props: { plans },
    })

    expect(wrapper.text()).toContain('Plano A')
    expect(wrapper.text()).toContain('Plano B')
  })
})
