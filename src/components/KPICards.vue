<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 my-4">
    <div
      v-for="kpi in kpis"
      :key="kpi.label"
      class="bg-white dark:bg-gray-800 border rounded-lg p-4 shadow"
    >
      <h4 class="text-sm text-gray-500 dark:text-gray-300">{{ kpi.label }}</h4>
      <p class="text-2xl font-semibold">{{ kpi.value }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue"
import { useRoute } from "vue-router"
import axios from "axios"

const route = useRoute()
const kpis = ref([
  { label: "Calories", value: 0 },
  { label: "Carbs", value: 0 },
  { label: "Protein", value: 0 },
  { label: "Fat", value: 0 },
])

let intervalId = null

async function fetchKpis() {
  try {
    const { data } = await axios.get(
      `http://localhost:3001/plans?patientId=${route.params.id}`,
    )
    const latest = data[data.length - 1]

    if (latest?.calories) {
      kpis.value = [
        { label: "Calories", value: latest.calories },
        { label: "Carbs", value: latest.carbs },
        { label: "Protein", value: latest.protein },
        { label: "Fat", value: latest.fat },
      ]
    } else {
      kpis.value = kpis.value.map((k) => ({ ...k, value: 0 }))
    }
  } catch (err) {
    console.error("Error fetching KPIs:", err)
  }
}

onMounted(() => {
  fetchKpis()
  intervalId = setInterval(fetchKpis, 30000)
})

onUnmounted(() => {
  clearInterval(intervalId)
})
</script>
