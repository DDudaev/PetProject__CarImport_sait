<script setup lang="ts">

import { Header } from '~/widgets/header';
import { firstComponentsWidgets } from '~/widgets/firstComponentsWidgets';

</script>

<template>
    <div class="firstComponent">
        <Header/>
        <firstComponentsWidgets />
    </div>
</template>

<style scoped>

.firstComponent{
    height: max-content;
    width: 100%;
    background-color: var(--firstComponent-backgroundColor);
    box-shadow: 0px 5px 10px black;
}

@media screen and (max-width: 1207px) {

}


@media screen and (max-width: 767px) {


}

</style>