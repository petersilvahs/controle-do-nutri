import { ref, watchEffect, onMounted } from "vue"

const theme = ref<"light" | "dark">(
  (localStorage.getItem("theme") as "light" | "dark") || "light",
)

function toggleTheme() {
  theme.value = theme.value === "light" ? "dark" : "light"
  localStorage.setItem("theme", theme.value)
}

onMounted(() => {
  document.documentElement.classList.add(theme.value)
})

watchEffect(() => {
  document.documentElement.classList.remove(
    theme.value === "light" ? "dark" : "light",
  )
  document.documentElement.classList.add(theme.value)
})

export function useTheme() {
  return {
    theme,
    toggleTheme,
  }
}
