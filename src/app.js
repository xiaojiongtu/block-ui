import  Vue from 'vue'
import bButton from './b-button.vue'

Vue.component('b-button',bButton)
new Vue({
    el:'#app',
    data(){
        return{
            test:'223'
        }
    }
})
