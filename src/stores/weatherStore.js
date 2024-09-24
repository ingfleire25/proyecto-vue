import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useWeatherStre = defineStore('weather', ()=>{
   const  temperature = ref(0)
    const setTeperature = (temp) =>{
        temperature.value = temp
    }
    return {temperature, setTeperature}
})