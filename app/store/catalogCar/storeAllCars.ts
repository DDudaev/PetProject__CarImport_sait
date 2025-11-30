import { defineStore } from "pinia";
import type { PropsProductCard } from "~/entities/productCard/types";

export const useStoreCars = defineStore('carsAll', ()=>{
    const storeCars = ref<PropsProductCard[]>([
        {
            id: 1,
            label: 'Mercedes GLS Maybach',
            price: '18400000',
            power: '366',
            eatCar: 'Дизель',
            drive: 'Гибрид',
            img: '/img/cars/gls_maybach.png',
            isNew: true
        },
        {
            id: 2,
            label: 'Mercedes AMG GT 63',
            price: '23000000',
            power: '570',
            eatCar: 'Дизель',
            drive: 'Полный',
            img: '/img/cars/gt_63.png',
        },
        {
            id: 3,
            label: 'Mercedes G-class',
            price: '26000000',
            power: '430',
            eatCar: 'Дизель',
            drive: 'Полный',
            img: '/img/cars/g_500.png',
        },
        {
            id: 4,
            label: 'Mercedes Electric G-Class',
            price: '29000000',
            power: '310',
            eatCar: 'Электричество',
            drive: 'Полный',
            img: '/img/cars/manufaktur_classic_gray_solid.png',
        },
        {
            id: 5,
            label: 'Mercedes-Maybach S-Class',
            price: '27900000',
            power: '420',
            eatCar: 'Дизель',
            drive: 'Гибрид',
            img: '/img/cars/manufaktur_opalite_white_bright_obsidian_black.png',
            isNew: true
        },
        {
            id: 6,
            label: 'Mercedes EQS Saloon',
            price: '8500000',
            power: '370',
            eatCar: 'Дизель',
            drive: 'Гибрид',
            img: '/img/cars/graphite_gray.png',
        },
        {
            id: 7,
            label: 'Mercedes EQA',
            price: '9900000',
            power: '370',
            eatCar: 'Дизель',
            drive: 'Гибрид',
            img: '/img/cars/polar_white.png',
        },
        {
            id: 8,
            label: 'Mercedes GLB 220 4-Matic',
            price: '12500000',
            power: '315',
            eatCar: 'Дизель',
            drive: 'Полный',
            img: '/img/cars/glb_220_4matic.png',
        },
        {
            id: 9,
            label: 'Mercedes GLC 300 4-Matic',
            price: '17300000',
            power: '370',
            eatCar: 'Дизель',
            drive: 'Полный',
            img: '/img/cars/glc_300_4matic_coup_.png',
        },
        {
            id: 10,
            label: 'Mercedes GLE 450d 4-Matic',
            price: '22500000',
            power: '450',
            eatCar: 'Дизель',
            drive: 'Гибрид',
            img: '/img/cars/gle_450_d_4matic_coup_.png',
            isNew: true
        },
        {
            id: 11,
            label: 'Mercedes-AMG GT 4 Door',
            price: '27000000',
            power: '620',
            eatCar: 'Дизель',
            drive: 'Гибрид',
            img: '/img/cars/obsidian_black.png',
            isNew: true
        },
        {
            id: 12,
            label: 'Mercedes-AMG GT 2 Door',
            price: '39000000',
            power: '620',
            eatCar: 'Дизель',
            drive: 'Гибрид',
            img: '/img/cars/selenite_gray_metallic.png',
            isNew: true
        },

    ])

    return { storeCars }
})