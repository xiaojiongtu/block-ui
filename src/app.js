import  Vue from 'vue'
import bButton from './b-button.vue'
import bIcon from './icon'

Vue.component('b-button',bButton)
Vue.component('b-icon',bIcon)
new Vue({
    el:'#app',
    data(){
        return{
            test:'223'
        }
    }
})
