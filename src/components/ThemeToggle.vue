<script setup>
import { useTheme } from "../composables/useTheme"
import { Button } from "@progress/kendo-vue-buttons"

const { theme, toggleTheme } = useTheme()
</script>

<template>
  <div class="flex justify-end">
    <Button @click="toggleTheme">
      {{ theme === "dark" ? "☀️ Modo Claro" : "🌙 Modo Escuro" }}
    </Button>
  </div>
</template>
