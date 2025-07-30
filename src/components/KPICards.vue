<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 my-4">
    <Card v-for="kpi in kpis" :key="kpi.label">
      <template #header>
        <h4 class="text-sm text-gray-500">{{ kpi.label }}</h4>
      </template>
      <template #body>
        <p class="text-2xl font-semibold">{{ kpi.value }}</p>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue"
import { useRoute } from "vue-router"
import axios from "axios"
import { Card } from "@progress/kendo-vue-layout"

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
