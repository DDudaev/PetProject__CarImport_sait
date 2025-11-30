<script setup lang="ts">
import containerModule from '~/moduleStyle/containerModule.vue';

</script>

<template>
    <div class="MainInformationSection" aria-label="Важная информация первой секции">
        <containerModule class="MainInformationSection__container">
            <div class="MainInformationSection__container-left">
                <span>Импорт автомобилей из Европы</span>
                <h1>Привезём авто под ключ — быстро, безопасно и честно</h1>
                <p>Доставим от 40 до 60 дней</p>
            </div>
            <div class="MainInformationSection__container-contactDiv">
                <a href="https://t.me/moderator_one" target="_blank" rel="noopener noreferrer" class="MainInformationSection__container-button">
                    <span>    
                        Онлайн консультация
                    </span>
                </a>
                <div class="MainInformationSection__container-contactDiv__links">
                    <a href="https://t.me/moderator_one">
                        <Icon alt="VK" class="links__icon" name="mdi:vk"/>
                    </a>
                    <a href="https://t.me/moderator_one">
                        <Icon alt="Instagram" class="links__icon" name="mdi:instagram"/>
                    </a>
                    <a href="https://t.me/moderator_one">
                        <Icon alt="Telegram" class="links__icon" name="ic:baseline-telegram"/>
                    </a>
                    <a href="https://t.me/moderator_one">
                        <Icon alt="WhatsApp" class="links__icon" name="ic:baseline-whatsapp"/>
                    </a>
                </div>

            </div>
            <div class="MainInformationSection__container-fact">
                <NuxtImg class="MainInformationSection__container-fact__avito" src="/img/logo/avitoLogo.png" alt="Avito Logo" loading="lazy" format="webp"/>
                <NuxtImg class="MainInformationSection__container-fact__autoru" src="/img/logo/autoru.png" alt="AutoRu logo" loading="lazy" format="webp"/>
                <div class="MainInformationSection__container-fact__information">
                    <span> >200 клиентов оставили 5 <Icon class="star__icon" name="ic:outline-star" /></span>
                    <span> Авто дешевле чем у дилеров</span>
                </div>
            </div>
            <div class="MainInformationSection__container-right">
                <NuxtImg alt="Cadillac ESCALADE-V 2026" src="/img/cars/cadikac2025.png" class="right__img" quality="80" format="webp" loading="lazy" />
            </div>
        </containerModule>
    </div>
</template>

<style scoped>
.MainInformationSection{
    width: 100%;
    height: 600px;
    display: flex;
    justify-content: center;
    position: relative
}

.MainInformationSection__container{
    overflow: hidden;
    display: flex;
    position: relative;
    width: 100%;
}

.MainInformationSection__container-left{
    display: flex;
    flex-direction: column;
    position: relative;
    height: max-content;
    width: 650px;
    z-index: 9;
    top: 50px;
    left: 80px;
    gap: 10px;
    user-select: none;
    
}

.MainInformationSection__container-left span{
    font-size: 18px;
    letter-spacing: 1px;
    font-family: "Montserrat", sans-serif;
    opacity: 0.8;
    font-weight: 600;
    color: #ffffff;
}

.MainInformationSection__container-left h1{
    font-size: 28px;
    font-family: "Stack Sans Text", sans-serif;
    text-transform: uppercase;
    letter-spacing: 5.2px;
    line-height: 50px;
    font-weight: 700;
    color: #ff3600;
}

.MainInformationSection__container-left p{
    font-size: 20px;
    letter-spacing: 1px;
    font-family: "Montserrat", sans-serif;
    opacity: 0.8;
    text-transform: uppercase;
    font-weight: 600;
    color: #ffffff;
}

.MainInformationSection__container-contactDiv{
    display: flex;
    align-items: center;
    flex-direction: column;
    grid-gap: 10px;
    height: max-content;
    position: absolute;
    z-index: 9;
    bottom: 160px;
    left: 100px;
}

.MainInformationSection__container-button{
    background: #eb4314;
    padding: 20px;
    border-radius: 20px;
    cursor: pointer;
    box-shadow: 0 0 25px rgba(255, 255, 255, 0.25);
    transition: all 0.5s ease;
}

.MainInformationSection__container-button span{
    font-family: "Stack Sans Text", sans-serif;
    font-weight: 500;
    font-size: 14px;
    color: var(--headerText-color);
}

.MainInformationSection__container-button:hover{
    transform: scale(1.01);
}

.MainInformationSection__container-contactDiv__links{
    display: flex;
    gap: 20px;
}

.links__icon{
    color: #cbcbcb;
    width: 35px;
    height: 35px;
}

.MainInformationSection__container-fact{
    height: 80px;
    width: max-content;
    z-index: 10;
    position: absolute;
    top: 70px;
    right: 90px;
    transform: rotate(3deg);
    border-radius: 15px;
    background: #ffffff;
    display: flex;
    justify-content: center;
    box-shadow: 0 0 25px rgba(255, 255, 255, 0.25);   
}

.MainInformationSection__container-fact__avito{
    position: absolute;
    background: #ffffff;
    border-radius: 10px;
    filter: blur(1px);
    transform: rotate(15deg);
    left: -25px;
    top: 50px;
    z-index: 11;
    width: 50px;
    height: 50px;
    box-shadow: 0 0 25px rgba(255, 255, 255, 0.25);
}

.MainInformationSection__container-fact__autoru{
    position: absolute;
    filter: blur(1px);
    border-radius: 10px;
    transform: rotate(15deg);
    right: -10px;
    top: -30px;
    width: 50px;
    height: 50px;
    z-index: 11;
    box-shadow: 0 0 25px rgba(255, 255, 255, 0.25);
}

.MainInformationSection__container-fact__information{
    box-shadow: inset 0px 0px 0px 4px rgba(204, 204, 204, 0.5);
    border-radius: 15px;
    padding: 20px;
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    grid-gap: 5px;
}

.MainInformationSection__container-fact__information span{
    font-size: 18px;
    font-family: "Fira Sans Condensed", sans-serif;
    font-weight: 400;
    display: flex;
    align-items: center;
}

.star__icon{
    color: rgb(255, 0, 0);
}

.MainInformationSection__container-right{
    position: absolute;
    z-index: 11;
    top: 150px;
    right: 0px;
    filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.25));
}

.right__img{
    height: 400px;
    width: auto;
}

@media screen and (max-width: 1207px) {


    .MainInformationSection__container-left{
        width: 650px;
        top: 50px;
        left: unset;
        gap: 10px;
    }

    
    .MainInformationSection__container-left span{
        font-size: 18px;
        color: #ffffff;
    }

    .MainInformationSection__container-left h1{
        font-size: 18px;
        width: 500px;
        letter-spacing: 5.2px;
        line-height: 40px;
        color: #ff3600;
    }

    .MainInformationSection__container-left p{
        font-size: 16px;
        color: #ffffff;
    }


    .MainInformationSection__container-contactDiv{
        grid-gap: 10px;
        z-index: 9;
        bottom: 90px;
        left: 10px;
    }

    .MainInformationSection__container-button{
        background: #eb4314;
        padding: 15px 10px;
        cursor: pointer;
        box-shadow: unset;
        transition: all 0.5s ease;
    }

    .MainInformationSection__container-button span{
        font-size: 12px;
        color: var(--headerText-color);
    }

    .MainInformationSection__container-button:hover{
        transform: scale(1.01);
    }

    .MainInformationSection__container-contactDiv__links{
        display: flex;
        gap: 10px;
    }

    .links__icon{
        color: #cbcbcb;
        width: 28px;
        height: 28px;
    }

    .MainInformationSection__container-fact{
        height: 70px;
        width: max-content;
        top: 90px;
        right: 60px;
        transform: rotate(3deg);
        border-radius: 15px;
        box-shadow: 0 0 25px rgba(255, 255, 255, 0.25);   
    }

.MainInformationSection__container-fact__avito{
        filter: blur(1px);
        transform: rotate(15deg);
        left: -15px;
        top: 50px;
        width: 30px;
        height: 30px;
        box-shadow: 0 0 25px rgba(255, 255, 255, 0.25);
    }

    .MainInformationSection__container-fact__autoru{
        filter: blur(1px);
        border-radius: 10px;
        transform: rotate(15deg);
        right: -10px;
        top: -25px;
        width: 40px;
        height: 40px;
        box-shadow: 0 0 25px rgba(255, 255, 255, 0.25);
    }

    .MainInformationSection__container-fact__information{
        padding: 15px;
        grid-gap: 5px;
    }

    .MainInformationSection__container-fact__information span{
        font-size: 16px;
    }

    .MainInformationSection__container-right{
        top: 150px;
        right: 0px;
        filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.25));
    }

    .right__img{
        height: 280px;
        width: auto;
    }


    .MainInformationSection{
        height: 450px;
    }


}


@media screen and (max-width: 767px) {

    .MainInformationSection__container-left{
        width: 100%;
        top: 30px;
        left: unset;
        gap: 10px;
    }

    .MainInformationSection__container-left span{
        font-size: 16px;
        color: #ffffff;
    }

    .MainInformationSection__container-left h1{
        font-size: 14px;
        width: 360px;
        letter-spacing: 4.2px;
        line-height: 30px;
        color: #ff3600;
    }

    .MainInformationSection__container-left p{
        font-size: 14px;
        color: #ffffff;
    }


    .MainInformationSection__container-contactDiv{
        flex-direction: row;
        grid-gap: 10px;
        z-index: 9;
        bottom: 240px;
        left: 10px;
    }

    .MainInformationSection__container-button{
        background: #eb4314;
        padding: 15px 10px;
        cursor: pointer;
        box-shadow: 0 0 3px rgba(255, 255, 255, 0.25);
        transition: all 0.5s ease;
    }

    .MainInformationSection__container-button span{
        text-wrap: nowrap;
        font-size: 10px;
        color: var(--headerText-color);
    }

    .MainInformationSection__container-button:hover{
        transform: scale(1.01);
    }

    .MainInformationSection__container-contactDiv__links{
        display: flex;
        gap: 5px;
    }

    .links__icon{
        color: #cbcbcb;
        width: 28px;
        height: 28px;
    }

    .MainInformationSection__container-fact{
        height: 40px;
        width: max-content;
        top: 280px;
        right: 20px;
        transform: rotate(3deg);
        border-radius: 15px;
        box-shadow: 0 0 15px rgba(255, 255, 255, 0.25);   
    }

.MainInformationSection__container-fact__avito{
        filter: blur(1px);
        transform: rotate(15deg);
        left: -15px;
        top: 20px;
        width: 30px;
        height: 30px;
        box-shadow: 0 0 15px rgba(255, 255, 255, 0.25);
    }

    .MainInformationSection__container-fact__autoru{
        filter: blur(1px);
        border-radius: 10px;
        transform: rotate(15deg);
        right: -10px;
        top: -20px;
        width: 30px;
        height: 30px;
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.25);
    }

    .MainInformationSection__container-fact__information{
        box-shadow: inset 0px 0px 0px 2px rgba(204, 204, 204, 0.5);
        padding: 15px;
        grid-gap: 5px;
    }

    .MainInformationSection__container-fact__information span{
        font-size: 10px;
    }

    .MainInformationSection__container-right{
        top: 310px;
        right: 0px;
        filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.25));
    }

    .right__img{
        height: 180px;
        width: auto;
    }


    .MainInformationSection{
        height: 500px;
    }


}

</style>