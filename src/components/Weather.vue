<template>
   <h3>La temperatura actual es: {{ weatherStore.temperature }}°</h3>
</template>

<script setup>
    import { useWeather } from '@/composables/useWeather';
    import { onMounted } from 'vue';
    import { useWeatherStre } from '@/stores/weatherStore';
// import { getTemperature } from '@/helpers/getWeather';

    const weatherStore = useWeatherStre()

    onMounted(()=>{
        useWeather()
    })
</script>

<style  scoped>

</style>