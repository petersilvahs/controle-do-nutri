<template>
  <div
    class="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center"
  >
    <div
      class="bg-white dark:bg-gray-900 p-6 rounded shadow-md w-full max-w-xl"
    >
      <h2 class="text-lg font-semibold mb-4">Novo Plano Nutricional</h2>

      <form @submit.prevent="submitPlan">
        <div class="mb-4">
          <label class="block mb-1">Nome do Plano</label>
          <input
            v-model="name"
            type="text"
            class="w-full p-2 border rounded"
            required
          />
        </div>

        <div class="mb-4">
          <label class="block mb-1">Duração</label>
          <input
            v-model="duration"
            type="text"
            class="w-full p-2 border rounded"
            required
          />
        </div>

        <div class="flex justify-end mt-6">
          <button type="button" @click="$emit('close')" class="mr-4 px-4 py-2">
            Cancelar
          </button>
          <button
            type="submit"
            class="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Salvar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

const emit = defineEmits(["close"])

const name = ref("")
const duration = ref("")

function submitPlan() {
  // TODO: enviar dados via API
  console.log("Plano enviado:", name.value, duration.value)
  emit("close")
}
</script>
