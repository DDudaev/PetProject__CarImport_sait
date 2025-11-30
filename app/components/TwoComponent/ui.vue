<script setup lang="ts">
import { catalogCard } from '~/features/catalog';
import containerModule from '~/moduleStyle/containerModule.vue';
</script>

<template>
    <section class="twoComponent" aria-label="Вторая секция сайта">
        <containerModule class="twoComponent__container">
            <catalogCard />
        </containerModule>
    </section>
</template>

<style scoped>
.twoComponent{
    min-height: 400px;
    padding: 30px;
}
</style>