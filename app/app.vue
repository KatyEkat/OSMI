<template>
  <div class="layout">
    <Header />
    <main class="layout__content">
      <CompanyTabs />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from "../components/Header.vue";
import CompanyTabs from "../components/CompanyTabs.vue";
import Footer from "../components/Footer.vue";
</script>

<style lang="scss">
html,
body {
  height: 100%;
  margin: 0;
}

.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.layout__content {
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>