import { defineStore } from "pinia"
import {ref} from 'vue'

// el estado defineStore recibe en primer parametro el nobre del estado y luego una funcion flecha
// detro del la funcion flecha se crean las variales reactivas que se usaran para guardar estados

export const useRegistrarStore = defineStore('registrar', () =>{
    const nombre= ref('');
    const email= ref('');

    const guardarRegistro = (nombreFormulario, emailFormulario) =>{
        nombre.value = nombreFormulario;
        email.value = emailFormulario;
    }
    return{ nombre, email, guardarRegistro}
});