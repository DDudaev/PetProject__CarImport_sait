<script setup lang="ts"></script>

<template>
    <div class="container">
        <slot></slot>
    </div>
</template>

<style scoped>
.container{
    margin: 0 auto;
    max-width: 1208px;
    width: 100%;
}

@media screen and (max-width: 1207px) {
  .container {
    max-width: 768px;
  }
}

@media screen and (max-width: 767px) {
  .container {
    max-width: 342px;
  }
}

</style>