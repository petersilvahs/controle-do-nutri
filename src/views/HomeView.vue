<template>
  <n-config-provider :theme="naiveTheme">
    <div
      :class="
        theme === 'dark'
          ? 'dark bg-gray-900 text-white min-h-screen'
          : 'bg-gray-50 text-gray-900 min-h-screen'
      "
    >
      <div class="p-6 max-w-7xl mx-auto">
        <div class="flex justify-between items-center mb-4">
          <h1 class="text-3xl font-bold">Controle do Nutre</h1>
          <ThemeToggle />
        </div>
        <p class="text-base mb-6 text-gray-600 dark:text-gray-300">
          Gerencie facilmente os pacientes, seus planos alimentares e acompanhe
          os dados nutricionais em tempo real.
        </p>
        <n-grid :cols="3" x-gap="16" y-gap="16" responsive="screen">
          <n-grid-item v-for="patient in patients" :key="patient.id">
            <router-link :to="`/paciente/${patient.id}`">
              <n-card
                hoverable
                class="transition-all duration-300 cursor-pointer rounded-lg p-4 shadow-md dark:shadow-lg"
              >
                <div class="flex items-center space-x-4">
                  <n-avatar
                    size="large"
                    src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  />
                  <div>
                    <div class="text-lg font-semibold">{{ patient.name }}</div>
                    <div class="text-sm text-gray-500 dark:text-gray-400">
                      {{ patient.email }}
                    </div>
                  </div>
                </div>
              </n-card>
            </router-link>
          </n-grid-item>
        </n-grid>
      </div>
    </div>
  </n-config-provider>
</template>

<script setup>
import { ref, onMounted, computed } from "vue"
import axios from "axios"
import ThemeToggle from "../components/ThemeToggle.vue"
import {
  NGrid,
  NGridItem,
  NCard,
  NAvatar,
  NConfigProvider,
  darkTheme,
} from "naive-ui"
import { useTheme } from "../composables/useTheme"

const patients = ref([])
const { theme } = useTheme()

const naiveTheme = computed(() => (theme.value === "dark" ? darkTheme : null))

onMounted(async () => {
  const { data } = await axios.get("http://localhost:3001/patients")
  patients.value = data
})
</script>
