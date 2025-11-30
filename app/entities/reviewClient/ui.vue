<script setup lang="ts">
import { type PropsReview } from './types';
const reviewProps = defineProps<PropsReview>()


</script>

<template>
    <article class="reviewClient">
        <div class="reviewClient__img">
            <NuxtImg :src="reviewProps.urlImg" quality="80" format="webp" loading="lazy"/>
        </div>
        <div class="reviewClient__information">
            <div class="reviewClient__information-name-date">
                <div class="reviewClient__information-name-date__name">
                    <p>{{ reviewProps.userName }}</p>
                </div>
                <div class="reviewClient__information-name-date__date">
                    <b>{{ reviewProps.dateReview }}</b>
                    <span>
                        <Icon name="ic:outline-star" />
                        {{ reviewProps.countReview }}
                    </span>
                </div>
            </div>
            <div class="reviewClient__information-comment">
                <p>{{ reviewProps.textReview }}</p>
            </div>
        </div>
    </article>
</template>

<style scoped>
.reviewClient{
    width: 350px;
    height: 350px;
    background: #ffffff;
    border-radius: 10px;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    overflow: hidden;
    box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.2);
}

.reviewClient__img{
    background: #acacac;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 105%;
    height: 200px;
}

.reviewClient__information{
    margin: 20px;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.reviewClient__information-name-date{
    display: flex;
    justify-content: space-between;
    margin: 0px 30px;
}

.reviewClient__information-name-date__name{
    display: flex;
    gap: 5px;
    align-items: center;
}

.reviewClient__information-name-date__date{
    display: flex;
    align-items: center;
    gap: 10px;
}

.reviewClient__information-comment{
    width: 280px;
    margin: 0 auto;
}

@media screen and (max-width: 767px) {
    .reviewClient{
        width: 300px;
        height: 300px;
        flex: 0 0 auto;
        box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.2);
    }

    .reviewClient__img{
        width: 110%;
        height: 180px;
    }
    
    .reviewClient__information-name-date{
        margin: 0px 20px;
    }
}
</style>