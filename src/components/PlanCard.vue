<template>
  <div class="p-4 rounded-md border shadow-md bg-white dark:bg-gray-800">
    <h2 class="text-xl font-bold mb-2">
      {{ plan.planoNutricional.nome }} ({{ plan.date }})
    </h2>
    <PlanDay
      v-for="day in plan.planoNutricional.dias"
      :key="day.dia"
      :day="day"
    />
  </div>
</template>

<script setup>
defineProps({
  plan: {
    type: Object,
    required: true,
  },
});
import PlanDay from "./PlanDay.vue";
</script>
