<script setup lang="ts">
import { type PropsProductCard } from './types'

const PropCard = defineProps<PropsProductCard>() 
</script>

<template>
    <article class="productCard" aria-label="Карточка товара" >
        <span v-show="PropCard.isNew" class="productCard__isNew">Новинка</span>
        <div class="productCard__img">
            <NuxtImg :src="PropCard.img" :alt="PropCard.label" format="webp" loading="lazy" quality="80" width="auto" height="auto"/>
        </div>
        <div class="productCard__information">
            <div class="productCard__information-label">
                <p> {{ PropCard.label }} </p>
            </div>
            <div class="productCard__information-price">
                <span>
                    {{new Intl.NumberFormat('ru-Ru').format(Number(PropCard.price))}} Р
                </span>
                <div class="productCard__information-price_informCar">
                    <p class="productCard__information-price_informCar-p1">{{ PropCard.power }} л.с</p>
                    <p class="productCard__information-price_informCar-p2">{{ PropCard.eatCar }}</p>
                    <p class="productCard__information-price_informCar-p3">{{ PropCard.drive }} <b>привод</b></p>
                </div>
            </div>
        </div>
    </article>
</template>

<style scoped>
.productCard{
    position: relative;
    height: 300px;
    width: 360px;
    padding: 10px;
    background-color: #d0d0d0;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
}

.productCard__isNew{
    position: absolute;
    left: 0;
    top: 0;
    padding: 10px;
    border-radius: 0px 0px 10px 0px;
    background: rgb(255, 252, 152);
    font-size: 14px;
    font-family: "Montserrat", sans-serif;
    font-weight: 900;
    text-transform: uppercase;
    user-select: none;
}

.productCard__img{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 105%;
    height: 180px;
    margin-left: 30px;
}

.productCard__information {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
}

.productCard__information-label{
    text-align: center;
}

.productCard__information-label p{
    font-size: 16px;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
}

.productCard__information-price{
    display: flex;
    align-items: center;
    gap: 20px;
}

.productCard__information-price span{
    background: #fff;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    padding: 10px;
    border-radius: 10px;
    font-size: 18px;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
}

.productCard__information-price_informCar{
    display: grid;
    text-align: center;
    grid-template-areas: 
    "leftTop RightTop"
    "centerBottom centerBottom"
    ;
    gap: 5px;
    font-size: 14px;
    font-family: "Montserrat", sans-serif;
    font-weight: 100;
}

.productCard__information-price_informCar-p1{
    grid-area: leftTop;
}

.productCard__information-price_informCar-p2{
    grid-area: RightTop;
}

.productCard__information-price_informCar-p3{
    grid-area: centerBottom;
}

@media screen and (max-width: 1207px) {

}


@media screen and (max-width: 767px) {

    .productCard{
        height: 210px;
        width: 160px;
        padding: 10px;
        border-radius: 15px;
    }

    .productCard__isNew{
        padding: 8px;
        font-size: 10px;
    }

    .productCard__img{
        margin-left: 20px;
        width: 180px;
        height: 120px;
    }

    .productCard__information {
        gap: 5px;
    }

    .productCard__information-label p{
        font-size: 10px;
        width: 150px;
        font-weight: 700;
    }

    .productCard__information-price{
        flex-direction: column-reverse;
        gap: 10px;
    }

    .productCard__information-price span{
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
        padding: 5px 10px;
        border-radius: 5px;
        font-size: 13px;
        font-family: "Montserrat", sans-serif;
        font-weight: 400;
    }

    .productCard__information-price_informCar{
        text-align: unset;
        grid-template-areas: 
            "leftTop RightTop centerBottom"
        ;
        gap: 5px;
        font-size: 8px;
        font-family: "Montserrat", sans-serif;
        font-weight: 100;
    }

    .productCard__information-price_informCar-p3 b{
        display: none;
    }

}
</style>