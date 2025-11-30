<script setup lang="ts">
import containerModule from '~/moduleStyle/containerModule.vue';
</script>

<template>
    <footer class="footer" aria-label="Нижняя часть страницы">
        <containerModule class="footer__container">
            <div class="footer__container-left">
                <div class="footer__container-left__main" aria-label="Быстрая информация">
                    <p>
                        <span>АвтоИмпорт</span> - являемся посредниками в предоставлении машин элитного, среднего, экономного класса со всех стран мира. Доставка за 40-60 дней
                    </p>
                </div>
                <div class="footer__container-left__social" aria-label="Социальные сети">
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
            <div class="footer__container-right" aria-label="Соблюдение закона Российской Федерации по созданию сайтов">
                <div class="footer__container-right__main">
                    <a href="/privacy-policy" target="_blank">Политика конфиденциальности</a>
                    <a href="/data-processing" target="_blank">Согласие на обработку персональных данных</a>
                    <a href="/user-agreement" target="_blank">Пользовательское соглашение</a>
                    <a href="/offer" target="_blank">Публичная оферта</a>
                </div>
                <div class="footer__container-right__owner">
                    <p>© 2025 АвтоИмпорт. Все права защищены.</p>
                    <p>ИНН: 0000000000 | ОГРН: 0000000000000</p>
                </div>
            </div>
        </containerModule>
    </footer>
</template>

<style scoped>
.footer{
    background-color: var(--footerWidget-color);
    height: 340px;
    width: 100%;
    padding: 40px 0px;
    font-size: 14px;
    font-family: "Montserrat", sans-serif;
    font-weight: 900;
    color: #f0f0f0;
}

.footer__container{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 80px;
}

.footer__container-left{
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: max-content
}

.footer__container-left__main{
    width: 270px;
}

.footer__container-left__main span{
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 1.1mm;
    color: #ff3600;
}

.footer__container-left__social{
    display: flex;
    gap: 20px;
}

.links__icon{
    width: 30px;
    height: 30px;
}

.footer__container-right{
    width: max-content;
    gap: 20px;
    display: flex;
    flex-direction: column;
}

.footer__container-right__main{
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.footer__container-right__owner{
    display: flex;
    flex-direction: column;
    gap: 10px;
}

@media screen and (max-width: 767px) {

    .footer{
        height: 280px;
        padding: 40px 0px;
        font-size: 12px;
    }


    .footer__container{
        gap: 20px;
    }   

    .footer__container-left__main{
        width: 180px;
    }

    .footer__container-left__social{
        gap: 10px;
    }


    .footer__container-right{
        gap: 20px;
    }

    .footer__container-right__main{
        gap: 5px;
        font-size: 10px;
    }

    .footer__container-right__owner{
        gap: 10px;
        font-size: 8px;
    }

}

</style>