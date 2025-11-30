import { defineStore } from "pinia";

export const useStoreReview = defineStore('ReviewClient',()=>{

    const storeReview = ref([
        {
            id: 1,
            userName: 'Алексей',
            countReview: 5,
            dateReview: '15.11.2025',
            textReview: 'Супер!!! Машина идеальная, выгодно заказал',
            urlImg: '/img/cars/obsidian_black.png'
        },
            {
            id: 2,
            userName: 'Максим',
            countReview: 5,
            dateReview: '19.11.2025',
            textReview: 'Выбирал подарок жене, очень довольна. Дешевле чем РФ цены ',
            urlImg: '/img/cars/manufaktur_opalite_white_bright_obsidian_black.png'
        },
            {
            id: 3,
            userName: 'Егор',
            countReview: 5,
            dateReview: '26.11.2025',
            textReview: '👍👍👍',
            urlImg: '/img/cars/gls_maybach.png'
        },
            {
            id: 4,
            userName: 'Екатерина',
            countReview: 5,
            dateReview: '29.11.2025',
            textReview: 'Лучшие!!!',
            urlImg: '/img/cars/graphite_gray.png'
        },
            {
            id: 5,
            userName: 'Денис',
            countReview: 5,
            dateReview: '30.11.2025',
            textReview: 'Машину выгодно очень заказал, теперь все оглядываются 👍',
            urlImg: '/img/cars/g_500.png'
        },
        
    ])

    return { storeReview }

})