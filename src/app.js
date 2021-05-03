import  Vue from 'vue'
import bButton from './b-button.vue'
import bIcon from './icon'
import bButtonGroup from './button-group'
import bInput from './input'

Vue.component('b-button',bButton)
Vue.component('b-icon',bIcon)
Vue.component('b-button-group',bButtonGroup)
Vue.component('b-input',bInput)
new Vue({
    el:'#app',
    data(){
        return{
            test:'223',
            loading1:false
        }
    },
  methods:{
    inputChange(e){
      console.log(e.target.value);
      console.log(333)
    }
  }
})
