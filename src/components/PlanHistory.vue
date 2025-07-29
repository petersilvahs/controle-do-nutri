<template>
  <div class="space-y-6 mt-4">
    <PlanCard v-for="plan in plans" :key="plan.id" :plan="plan" />
  </div>
</template>

<script setup>
import PlanCard from "./PlanCard.vue";

defineProps({
  plans: {
    type: Array,
    required: true,
  },
});
</script>
