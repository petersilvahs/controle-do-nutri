<script setup>
import { useTheme } from "../composables/useTheme"
import { NButton } from "naive-ui"

const { theme, toggleTheme } = useTheme()
</script>

<template>
  <div class="flex justify-end">
    <n-button @click="toggleTheme" type="default">
      {{ theme === "dark" ? "☀️ Modo Claro" : "🌙 Modo Escuro" }}
    </n-button>
  </div>
</template>
