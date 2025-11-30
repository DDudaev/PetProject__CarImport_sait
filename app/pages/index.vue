<script setup lang="ts">

definePageMeta({
    layout: 'mainpage'
})

import contentModule from '~/moduleStyle/contentModule.vue';

import { twoComponent } from '~/components/TwoComponent';
import { threeComponent } from '~/components/ThreeComponent';
import { fourComponent } from '~/components/FourComponent';
</script> 

<template>
    <contentModule>
        <twoComponent />
        <threeComponent />
        <fourComponent />
    </contentModule>
</template>

<style scoped></style>