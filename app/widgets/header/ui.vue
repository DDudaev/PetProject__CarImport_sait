<script setup lang="ts">
import containerModule from '~/moduleStyle/containerModule.vue';
import { BarMenu } from '~/features/header/barMenu';
import { informationLocationAndPhone } from '~/features/header/information';
</script>

<template>
    <div class="header" aria-label="Верхняя часть страницы">
        <containerModule class="header__container">
            <div class="header__container-top">
                <div class="header__container-barMenu">
                    <BarMenu/>
                </div>
                <div class="header__container-logo">
                    <NuxtLink to="/">LOGO</NuxtLink>
                </div>
                <div class="header__container-informationLocationAndPhone">
                    <informationLocationAndPhone />
                </div>
            </div>
        </containerModule>
    </div>
</template>

<style scoped>
.header{
    z-index: 100;
    position: relative;
    display: flex;
    background-color: var(--headerWidget-color);
    color: var(--headerText-color);
    width: 100%;
    height: 60px;
}

.header__container{
    display: flex;
    flex-direction: column;
}

.header__container-top{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 5px;
}

.header__container-logo{
    
}

@media screen and (max-width: 767px) {
    .header__container{
        justify-content: space-between;
    }
}
</style>