import { useWeatherStre } from "@/stores/weatherStore";
import { getTemperature } from "@/helpers/getWeather";

export const useWeather = async () => {
    const temperatura = await getTemperature();
    const weatherStore = useWeatherStre();
    weatherStore.temperature = temperatura
}