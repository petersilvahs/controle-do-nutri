# 🥗 Controle do Nutri

Aplicação web desenvolvida com Vue 3 para que nutricionistas possam visualizar, criar e acompanhar planos alimentares de seus pacientes.

## ✨ Funcionalidades

- 📋 **Listagem de Pacientes** em grid responsivo
- 📄 **Histórico de planos alimentares** com filtro por data
- ➕ **Criação e edição** de planos em modal
- 📊 **KPIs nutricionais dinâmicos** atualizados a cada 30 segundos
- 🌗 **Modo claro/escuro** com persistência em localStorage

## 📦 Tecnologias

- [Vue 3 (Composition API)](https://vuejs.org/)
- [Naive UI](https://www.naiveui.com/) – biblioteca de UI
- [TailwindCSS](https://tailwindcss.com/) – para estilos utilitários
- [Axios](https://axios-http.com/) – consumo da API REST mockada
- [Vitest](https://vitest.dev/) + [Vue Test Utils](https://test-utils.vuejs.org/) – testes unitários
- [JSON Server](https://github.com/typicode/json-server) – mock da API REST

## 🚀 Instalação e Execução

```bash
# Instale as dependências
npm install

# Inicie o mock da API (porta 3001)
npx json-server --watch db.json --port 3001

# Rode o app em modo dev
npm run dev
```
