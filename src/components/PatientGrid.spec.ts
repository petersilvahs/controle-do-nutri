import { mount } from "@vue/test-utils"
import PatientGrid from "../../src/components/PatientGrid.vue"
import { describe, it, expect } from "vitest"

describe("PatientGrid.vue", () => {
  it("exibe pacientes corretamente no grid", () => {
    const patients = [
      { id: 1, name: "Ana Clara", email: "ana@example.com" },
      { id: 2, name: "Bruno Lima", email: "bruno@example.com" },
    ]

    const wrapper = mount(PatientGrid, {
      props: { patients },
      global: {
        stubs: ["router-link"],
      },
    })

    expect(wrapper.text()).toContain("Ana Clara")
    expect(wrapper.text()).toContain("Bruno Lima")
  })
})
