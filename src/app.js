import  Vue from 'vue'
import Button from './button.vue'

Vue.component('b-button',Button)
new Vue({
    el:'#app',
    data(){
        return{
            test:'223'
        }
    }
})
