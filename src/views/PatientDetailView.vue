<template>
  <n-config-provider :theme="naiveTheme">
    <div
      :class="
        theme === 'dark'
          ? 'dark bg-gray-900 text-white min-h-screen'
          : 'bg-white text-gray-900 min-h-screen'
      "
    >
      <div class="p-6 max-w-4xl mx-auto">
        <div class="flex flex-col md:flex-row gap-6 mb-6">
          <div class="flex-1">
            <PlanHistory :plans="plans" />
          </div>
          <div class="flex-1">
            <div class="grid grid-cols-2 gap-4">
              <n-card class="text-center">
                <div>🔢 <strong>Calorias</strong><br />2300cal</div>
              </n-card>
              <n-card class="text-center">
                <div>🍞 <strong>Carboidratos</strong><br />300g</div>
              </n-card>
              <n-card class="text-center">
                <div>🥩 <strong>Proteínas</strong><br />150g</div>
              </n-card>
              <n-card class="text-center">
                <div>🥑 <strong>Gorduras</strong><br />70g</div>
              </n-card>
            </div>
          </div>
        </div>
        <div class="flex justify-end mb-4">
          <n-button @click="openModal" type="primary">
            Novo Plano Nutricional
          </n-button>
        </div>
        <PlanModal v-if="showModal" @close="showModal = false" />
      </div>
    </div>
  </n-config-provider>
</template>

<script setup>
import { ref, onMounted, computed } from "vue"
import { useRoute } from "vue-router"
import axios from "axios"
import { NButton, NCard, NConfigProvider, darkTheme } from "naive-ui"
import PlanHistory from "../components/PlanHistory.vue"
import PlanModal from "../components/PlanModal.vue"
import { useTheme } from "../composables/useTheme"

const route = useRoute()
const plans = ref([])
const showModal = ref(false)
const { theme } = useTheme()

const naiveTheme = computed(() => (theme.value === "dark" ? darkTheme : null))

function openModal() {
  showModal.value = true
}

onMounted(async () => {
  const { data } = await axios.get(
    `http://localhost:3001/plans?patientId=${route.params.id}`,
  )
  plans.value = data
})
</script>
