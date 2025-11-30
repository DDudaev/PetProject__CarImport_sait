<script setup lang="ts"></script>

<template>
    <main class="main">
        <slot></slot>
    </main>
</template>

<style scoped>
.main {
  min-height: calc(100vh - 340px - 60px);
}

@media screen and (max-width: 767px) {
  .main {
    min-height: calc(100vh - 280px - 60px);
  }
}
</style>