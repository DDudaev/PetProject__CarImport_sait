<script setup lang="ts">

const nameInput = ref('')
const phoneInput = ref('')

const errorMessage = ref('')

const acceptCall = ref(false)

const valueValid = () => {
    if( !/^[А-Яа-яЁё]+$/.test(nameInput.value) || nameInput.value.length <= 2 || nameInput.value.length >= 15){
        errorMessage.value = 'Имя слишком короткое, либо содержит цифры'
        return false
    }

    if( !/^\+?\d{10,12}$/.test(phoneInput.value) ){
        errorMessage.value = 'Некорректный номер телефона'
        return false
    }
    errorMessage.value = ''
    localStorage.setItem('name', nameInput.value)
    localStorage.setItem('phone', phoneInput.value)
    localStorage.setItem('acceptCall', 'true')
    return acceptCall.value = true
}

onMounted(()=>{

    const savedAccept = localStorage.getItem('acceptCall');
    const savedName = localStorage.getItem('name');
    const savedPhone = localStorage.getItem('phone');

    if ( savedAccept === 'true' ){
        acceptCall.value = true
    }

    savedName ? nameInput.value = savedName : ''
    savedPhone ? phoneInput.value = savedPhone : ''
})

</script>

<template>
    <div class="callMe">
        <div class="callMe__left">
            <NuxtImg src="/img/logo/" alt="Сюда картинку"/>
        </div>
        <div class="callMe__right">
            <p class="callMe__right-p1">Оставьте заявку на звонок</p>
            <div v-if="acceptCall" class="accept__call">
                    <p class="accept__call-p1">
                        Ваша заявка успешно создана
                    </p>
                    <div class="accept__call-one">
                        <div class="accept__call-two">
                            <p class="accept__call-p2"> Имя: </p>
                            <span class="accept__call-s1"> {{ nameInput }} </span>
                        </div>
                        <div class="accept__call-three">
                            <p class="accept__call-p3"> Номер: </p>
                            <span class="accept__call-s2"> {{ phoneInput }} </span>
                        </div>
                    </div>
            </div>
            <div v-else class="callMe__right-input">
                <input v-model="nameInput" type="text" placeholder="Имя">
                <input v-model="phoneInput" type="text" placeholder="Номер телефона">
                <span>{{ errorMessage }}</span>
                <button class="pulse" @click="valueValid">Совершить звонок</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.callMe{
    position: relative;
    display: flex;
    align-items: center;
}

.callMe__left{
    top: 0;
    z-index: 0;
    position: absolute;
}

.callMe__right{
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    padding: 10px 0px;
    gap: 30px;
    margin-left: 500px;
    margin-top: 80px;
}

.callMe__right-p1 {
    color: #fff;
    font-size: 16px;
    font-family: "Stack Sans Text", sans-serif;
    letter-spacing: 3px;
    font-weight: 700;
    text-transform: uppercase;
    width: max-content;
}

.callMe__right-input{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}

.callMe__right-input input{
    width: 350px;
    height: 40px;
    border-radius: 5px;
    border: none;
    padding: 0px 25px;
}

.callMe__right-input span{
    color: #fff;
}

.callMe__right-input button{
    padding: 15px 30px;
    border-radius: 5px;
    border: none;
    font-weight: 600;
    text-transform: uppercase;
    background: #eb4314;
    color: #fff;
    transition: all 0.2s ease;
}

.callMe__right-input button:hover{
    transform: scale(1.03);
}

.accept__call{
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    width: 350px;
    height: 140px;
    border-radius: 10px;
    background-color: #fff;
}

.accept__call::after{
    content: '';
    position: absolute;
    background: var(--threeComponent-backgroundCOlor);
    height: 10px;
    width: 10px;
    top: 10px;
    left: 10px;
    border-radius: 25px;
}


.accept__call-p1{
    font-size: 18px;
    padding: 10px 15px;
    border-radius: 10px;
    letter-spacing: 1.1px;
    width: max-content;
    height: max-content;
    background: #eb4314;
    color: #fff;
}

.accept__call-one{
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.accept__call-two{
    display: flex;
    width: max-content;
}

.accept__call-p2{ 
    font-size: 18px;
}

.accept__call-s1{
    padding-left: 30px;
    font-size: 20px;
}

.accept__call-three{
    display: flex;
}

.accept__call-p3{
    width: max-content;
    font-size: 18px;
}

.accept__call-s2{
    padding-left: 10px;
    font-size: 20px;
}

.pulse {
    position: relative;
    animation: pulse 2s infinite;
}

@media screen and (max-width: 1207px) {
    .callMe__right{
        gap: 30px;
        margin-left: 280px;
        margin-top: 80px;
    }

    .callMe__right-p1 {
        color: #fff;
        font-size: 12px;
        font-family: "Stack Sans Text", sans-serif;
        letter-spacing: 3px;
        font-weight: 700;
    }
}

@media screen and (max-width: 767px) {
    .callMe__left{
        display: none;
    }


    .callMe__right{
        gap: 30px;
        margin-left: 10px;
        margin-top: 80px;
    }

    .callMe__right-p1 {
        color: #fff;
        font-size: 10px;
        font-family: "Stack Sans Text", sans-serif;
        letter-spacing: 3px;
        font-weight: 700;
    }

    .callMe__right-input input{
        width: 300px;
    }

    .accept__call{
        gap: 10px;
        width: 280px;
        height: 140px;
        border-radius: 10px;
    }

    .accept__call-p1{
        font-size: 14px;
        padding: 10px 10px;
        border-radius: 10px;
        letter-spacing: 1.1px;
    }

    .accept__call-p2{ 
        font-size: 16px;
    }

    .accept__call-s1{
        padding-left: 10px;
        font-size: 18px;
    }

    .accept__call-p3{
        font-size: 16px;
    }

    .accept__call-s2{
        padding-left: 10px;
        font-size: 18px;
    }
}


@keyframes pulse {
    0% {
        transform: scale(1);
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.10);
    }
    50% {
        transform: scale(1.01);
        box-shadow: 0 0 15px rgba(255, 255, 255, 0.25);
    }
    100% {
        transform: scale(1);
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.10);
    }
}

</style>