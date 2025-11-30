<script setup lang="ts"></script>

<template>
    <div class="barMenu__fastInfo" aria-label="Территориальное расположение и номер телефона">
            <div class="barMenu__fastInfo-location">
                <Icon class="barMenu__fastInfo-location-icon" name="material-symbols:map-pin-heart-outline-rounded" />
                <span> Москва </span>
            </div>
            <div class="barMenu__fastInfo-telephone">
                <Icon class="barMenu__fastInfo-telephone-icon" name="material-symbols-light:phone-in-talk" />
                <a href="tel: +79991515515">+7 (999) 151-55-15</a>
            </div>
        </div>
</template>

<style scoped>

.barMenu__fastInfo{
    display: flex;
    gap: 0px 20px;
    font-family: "Montserrat", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
}

.barMenu__fastInfo-location{
    display: flex;
    align-items: center;
    grid-gap: 5px;
    font-size: 16px;
}

.barMenu__fastInfo-location-icon {
    height: 26px;
    width: 26px;
}

.barMenu__fastInfo-telephone{
    display: flex;
    align-items: center;
    grid-gap: 5px;
    font-size: 16px;
}

.barMenu__fastInfo-telephone-icon{
    height: 26px;
    width: 26px;
}

@media screen and (max-width: 1207px) {

    .barMenu__fastInfo{
        gap: 10px;
    }

    .barMenu__fastInfo-location{
        font-size: 12px;
    }

    .barMenu__fastInfo-telephone{
        font-size: 12px;
    }
}

@media screen and (max-width: 767px) {

    .barMenu__fastInfo{
        gap: 5px;
    }

    .barMenu__fastInfo-location{
        display: flex;
        align-items: center;
        grid-gap: 3px;
        font-size: 14px;
    }

    .barMenu__fastInfo-location-icon {
        height: 20px;
        width: 20px;
    }

    .barMenu__fastInfo-telephone{
        display: flex;
        align-items: center;
        grid-gap: 3px;
        font-size: 14px;
    }

    .barMenu__fastInfo-telephone-icon{
        height: 20px;
        width: 20px;
    }

}

</style>