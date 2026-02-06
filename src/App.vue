<script setup lang="ts">
// IFoU 2026 Conference Website - Main App Component
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div id="app">
    <Header />
    
    <main class="main-content">
      <router-view />
    </main>
    
    <Footer />
  </div>
</template>

<style scoped lang="less">
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
}
</style>

