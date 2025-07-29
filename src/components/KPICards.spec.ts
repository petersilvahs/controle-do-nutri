import { mount } from "@vue/test-utils"
import KPICards from "@/components/KPICards.vue"
import { describe, it, expect } from "vitest"

describe("KPICards", () => {
  it("renderiza todos os cards de KPI com valores corretos", () => {
    const wrapper = mount(KPICards, {
      props: {
        calories: 2200,
        carbs: 300,
        protein: 150,
        fat: 70,
      },
    })

    expect(wrapper.text()).toContain("Calorias")
    expect(wrapper.text()).toContain("2200")
    expect(wrapper.text()).toContain("Carboidratos")
    expect(wrapper.text()).toContain("300")
    expect(wrapper.text()).toContain("Proteínas")
    expect(wrapper.text()).toContain("150")
    expect(wrapper.text()).toContain("Gorduras")
    expect(wrapper.text()).toContain("70")
  })
})
