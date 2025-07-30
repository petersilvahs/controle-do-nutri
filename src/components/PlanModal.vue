<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { Button as KButton } from '@progress/kendo-vue-buttons'

const props = defineProps({
  visible: Boolean,
  patientId: Number,
})

const emit = defineEmits(['update:visible', 'planCreated'])

const nome = ref('')
const duracao = ref('')

const salvar = async () => {
  if (!nome.value || !duracao.value) return

  const novoPlano = {
    patientId: props.patientId,
    date: new Date().toISOString().split('T')[0],
    planoNutricional: {
      nome: nome.value,
      duracao: `${duracao.value} dias`,
      dias: [],
    },
  }

  try {
    await axios.post('http://localhost:3001/plans', novoPlano)
    emit('planCreated')
    emit('update:visible', false)
  } catch (error) {
    console.error('Erro ao salvar plano:', error)
  }
}

const cancelar = () => {
  emit('update:visible', false)
}
</script>

<template>
  <div v-if="visible" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
    <div class="bg-white dark:bg-gray-800 rounded-xl w-full max-w-md shadow-lg p-6">
      <h2 class="text-xl font-bold mb-6 text-gray-800 dark:text-white">Novo Plano Nutricional</h2>

      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700 dark:text-white mb-1">Nome do Plano</label>
        <input
          v-model="nome"
          type="text"
          class="w-full rounded border border-gray-300 dark:border-gray-600 p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div class="mb-6">
        <label class="block text-sm font-medium text-gray-700 dark:text-white mb-1">Duração (em dias)</label>
        <input
          v-model="duracao"
          type="number"
          min="1"
          class="w-full rounded border border-gray-300 dark:border-gray-600 p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div class="flex justify-end gap-3">
        <KButton theme-color="tertiary" @click="cancelar">Cancelar</KButton>
        <KButton theme-color="primary" @click="salvar">Salvar</KButton>
      </div>
    </div>
  </div>
</template>
