<template>
  <div class="mb-4">
    <h3 class="font-semibold text-lg">Dia {{ day.dia }}</h3>
    <ul class="mt-2 space-y-2">
      <li
        v-for="meal in day.refeicoes"
        :key="meal.nome + meal.horario"
        class="p-2 border rounded"
      >
        <strong>{{ meal.horario }} - {{ meal.nome }}</strong>
        <ul class="ml-4 list-disc">
          <li v-for="food in meal.alimentos" :key="food.nome">
            {{ food.nome }} — {{ food.quantidade }} {{ food.unidadeMedida }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  day: {
    type: Object,
    required: true,
  },
})
</script>
