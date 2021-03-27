import  Vue from 'vue'
import bButton from './b-button.vue'
import bIcon from './icon'
import bButtonGroup from './button-group'

Vue.component('b-button',bButton)
Vue.component('b-icon',bIcon)
Vue.component('b-button-group',bButtonGroup)
new Vue({
    el:'#app',
    data(){
        return{
            test:'223',
            loading1:false
        }
    }
})
