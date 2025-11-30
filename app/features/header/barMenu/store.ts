import { defineStore } from "pinia";

export interface PropsItem {
    id: number
    label: string
    link: string
}

export const useBarMenuStore = defineStore('BarMenu', ()=>{

    const BarMenuItem = ref<PropsItem[]>([
        {id: 1, label: 'Легковые', link: '/sale'},
        {id: 2, label: 'Мотоциклы', link: '/bouquets'},
        {id: 3, label: 'Электро', link: '/delivery'},
        {id: 4, label: 'Китайцы', link: '/roses'},
        {id: 5, label: 'Подбор Авто', link: '/accessories'},
    ]);

    return { BarMenuItem }
})