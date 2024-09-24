import axios from "axios"

const API_URL = 'https://api.open-meteo.com/v1/forecast?latitude=10.6666&longitude=-71.6124&current=temperature_2m&timezone=auto&forecast_days=1'

export const getTemperature = async() => {
   const respuesta = await axios.get(API_URL)
   const nuevaTemperatura = respuesta.data.current.temperature_2m;
   return nuevaTemperatura
}