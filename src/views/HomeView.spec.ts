import { mount } from "@vue/test-utils"
import HomeView from "./HomeView.vue"
import axios from "axios"
import flushPromises from "flush-promises"
import { describe, it, expect, vi } from "vitest"

vi.mock("axios")

describe("HomeView.vue", () => {
  it("exibe pacientes retornados pela API", async () => {
    (axios.get as unknown as ReturnType<typeof vi.fn>).mockResolvedValue({
      data: [
        { id: 1, name: "Peter", email: "peter@email.com" },
        { id: 2, name: "Maria", email: "maria@email.com" },
      ],
    })

    const wrapper = mount(HomeView, {
      global: {
        stubs: ["router-link"],
      },
    })

    await flushPromises()

    expect(wrapper.text()).toContain("Peter")
    expect(wrapper.text()).toContain("Maria")
  })
})
