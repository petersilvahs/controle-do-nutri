import { defineStore } from "pinia";
import axios from "axios";

export const usePacienteStore = defineStore("paciente", {
  state: () => ({ pacientes: [] }),
  actions: {
    async fetchPacientes() {
      const { data } = await axios.get("/api/pacientes");
      this.pacientes = data;
    },
  },
});
