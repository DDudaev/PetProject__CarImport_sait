<script setup lang="ts">
import { useBarMenuStore } from './store';

const storeBarMenu = useBarMenuStore()

const activeMobileMenu = ref(false)

</script>

<template>
    <nav class="barMenu" aria-label="Быстрое меню по сайту">
            <ul class="barMenu__container-ul">
                <li class="barMenu__container-li"  v-for="item in storeBarMenu.BarMenuItem" :key="item.id" ::id="item.id">
                    <NuxtLink :to="item.link">
                        <p>{{ item.label }}</p>
                    </NuxtLink>
                </li>
            </ul>
    </nav>
    <nav class="barMenu__mobile">
        <Icon @click="activeMobileMenu = !activeMobileMenu" name="material-symbols-light:menu" size="30"/>
        <Transition name="effectsMenu">
            <div v-show="activeMobileMenu" class="barMenu__mobile-list">
                <ul class="barMenu__mobile-list-ul">
                    <li class="barMenu__mobile-list-li"  v-for="item in storeBarMenu.BarMenuItem" :key="item.id" ::id="item.id">
                        <NuxtLink :to="item.link">
                            <p>{{ item.label }}</p>
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </Transition>
    </nav>
</template>

<style scoped>
.barMenu{
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    grid-gap: 20px;
}

.barMenu__mobile{
    display: none;
    position: relative;
}

.barMenu__mobile-list{
    position: absolute;
    top: 40px;
    left: -25px;
    background: #fff;
    width: 150px;
    height: 300px;
    border-radius: 0px 0px 10px 0px;
}

.barMenu__mobile-list-ul{
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-left: 30px;
    padding-top: 20px;
}

.barMenu__mobile-list-li{
    
}

.barMenu__mobile-list-li p{
    font-size: 14px;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    color: var(--headerText-Mobile-color);
    transition: all 0.2s ease;
}

.barMenu__mobile-list-li:hover p{
    color: #000000;
}

/* Effect Transition */

.effectsMenu-enter-active, .effectsMenu-leave-active {
    transition: opacity 0.3s ease;
}

.effectsMenu-enter-from, .effectsMenu-leave-to {
    opacity: 0;
}

/* Effect Transition end */

.barMenu__container-ul{
    display: flex;
    grid-gap: 30px;
}

.barMenu__container-li{
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: max-content;
    height: 30px;
}

.barMenu__container-li::after{
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 0;
    background: var(--headerText-color-borderBottom);
    transition: width 0.4s ease;
}

.barMenu__container-li:hover::after{
    width: 100%;
}

.barMenu__container-li p{
    font-size: 16px;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
}

@media screen and (max-width: 1207px) {

    .barMenu__container-ul{
        grid-gap: 10px;
    }


   .barMenu__container-li p{
    font-size: 14px;
  }
}


@media screen and (max-width: 767px) {

    .barMenu{
        display: none;
    }
    
    .barMenu__mobile{
        display: flex;
    }

}
</style>