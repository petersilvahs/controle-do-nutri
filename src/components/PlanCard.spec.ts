import { mount } from "@vue/test-utils"
import PlanCard from "../../src/components/PlanCard.vue"
import { describe, it, expect } from "vitest"

describe("PlanCard.vue", () => {
  it("renderiza dados do plano corretamente", () => {
    const plan = {
      id: 1,
      description: "Plano de Massa Muscular",
      date: "2025-07-25",
    }

    const wrapper = mount(PlanCard, {
      props: { plan },
    })

    expect(wrapper.text()).toContain("Plano de Massa Muscular")
    expect(wrapper.text()).toContain("2025-07-25")
  })
})
