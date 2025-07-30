import { mount } from "@vue/test-utils"
import PlanModal from "../../src/components/PlanModal.vue"
import { describe, it, expect } from "vitest"

describe("PlanModal.vue", () => {
  it("emite evento close ao clicar em Cancelar", async () => {
    const wrapper = mount(PlanModal)
    await wrapper.find('button:contains("Cancelar")').trigger("click")
    expect(wrapper.emitted()).toHaveProperty("close")
  })
})
