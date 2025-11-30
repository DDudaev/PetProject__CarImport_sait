<script setup lang="ts">
import { reviewClient } from '~/entities/reviewClient';

import { useStoreReview } from '~/store/reviewClient/storeAllReview';
const reviewStore = useStoreReview()
</script>

<template>
    <div class="reviewClient__divMain">
        <reviewClient v-for="item in reviewStore.storeReview" :key="item.id" :id="item.id" :userName="item.userName" :countReview="item.countReview" :dateReview="item.dateReview" :textReview="item.textReview" :urlImg="item.urlImg"/>
    </div>
</template>

<style scoped>
.reviewClient__divMain {
    display: flex;
    gap: 10px;
    width: 100%;
    overflow-x: auto;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    padding-bottom: 10px;
    border-radius: 10px;
}

.reviewClient__divMain::-webkit-scrollbar{
    display: none;
}


</style>