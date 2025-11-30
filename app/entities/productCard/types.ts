interface PropsProductCard{
    id: number
    label: string
    price: string
    power: string
    eatCar: 'Дизель' | 'Электричество'
    drive: 'Передний' | 'Задний' | 'Полный' | 'Гибрид'
    isNew?: boolean
    img: string
}

export { type PropsProductCard } 