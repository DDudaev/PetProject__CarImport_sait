<script setup lang="ts">
import containerModule from '~/moduleStyle/containerModule.vue';
import { callMe } from '~/features/callMe';
</script>

<template>
    <section class="threeComponent" aria-label="Набрать на ваш номер телефона">
        <containerModule class="threeComponent__container">
            <callMe />
        </containerModule>
    </section>
</template>

<style scoped>
.threeComponent{
    display: flex;
    width: 100%;
    height: 400px;
    background: var(--threeComponent-backgroundCOlor);
}
</style>