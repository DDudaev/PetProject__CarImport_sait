<script setup lang="ts">
import containerModule from '~/moduleStyle/containerModule.vue';
import { reviewLenta } from '~/features/reviewLenta';

</script>

<template>
    <section class="fourComponent" aria-label="Лента отзывов клиентов">
        <containerModule class="fourComponent__container">
            <div class="fourComponent__container-text">
                <p>Отзывы</p>
            </div>
            <div class="fourComponent__container-lenta">
                <reviewLenta />
            </div>
        </containerModule>
    </section>
</template>

<style scoped>
.fourComponent{
    display: flex;
    width: 100%;
    height: 450px;
    background: var(--fourComponent-backgroundCOlor);
}

.fourComponent__container-text{
    color: #333333;
    font-size: 18px;
    font-family: "Stack Sans Text", sans-serif;
    letter-spacing: 4px;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    margin: 30px 0px 20px 0px;
}

@media screen and (max-width: 767px) {

    .fourComponent{
        height: 420px;
    }
    

    .fourComponent__container-text{
        font-size: 14px;
        letter-spacing: 4px;
        font-weight: 700;
        margin: 30px 0px 20px 0px;
    }

}

</style>