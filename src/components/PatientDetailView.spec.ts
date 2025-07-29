import { mount } from "@vue/test-utils"
import PatientDetailView from "../../src/views/PatientDetailView.vue"

vi.mock("axios", () => ({
  default: {
    get: vi.fn(() => Promise.resolve({ data: [] })),
  },
}))

describe("PatientDetailView.vue", () => {
  it("monta corretamente e mostra botão de novo plano", async () => {
    const wrapper = mount(PatientDetailView, {
      global: {
        stubs: ["router-link"],
      },
    })
    await wrapper.vm.$nextTick();
    expect(wrapper.text()).toContain("Novo Plano Nutricional")
  })
})
