<script setup lang="ts">
import { productCard } from '~/entities/productCard';
import { useStoreCars } from '~/store/catalogCar/storeAllCars';

const store = useStoreCars()
</script>

<template>
    <div class="catalog">
        <productCard v-for="item in store.storeCars" :id="item.id" :label="item.label" :price="item.price" :power="item.power" :eatCar="item.eatCar" :drive="item.drive" :isNew="item.isNew" :img="item.img"/>
    </div>
</template>

<style scoped>
.catalog{
    display: grid;
    justify-content: center;
    gap: 30px;
    grid-template-columns: repeat(3, max-content);
}

@media screen and (max-width: 1207px) {
    .catalog{
        gap: 20px;
        grid-template-columns: repeat(2, max-content);
    }
}


@media screen and (max-width: 767px) {

    .catalog{
        gap: 10px;
        grid-template-columns: repeat(2, max-content);
    }

}
</style>