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

//单元测试

import chai from 'chai'
const expect=chai.expect

{

    let Constructor=Vue.extend(bButton)
    let button=new Constructor({
        propsData:{
            icon:'setting'
        }
    })
    button.$mount('#test')
    let useElement=button.$el.querySelector('use')
    console.log(useElement);
    expect(useElement.getAttribute('xlink:href')).to.eq('#icon-setting')


}
{
    let Constructor=Vue.extend(bButton)
    let button=new Constructor({
        propsData:{
            icon:'setting',
            loading:true
        }
    })
    button.$mount()
    let useElement=button.$el.querySelector('use')
    let href=useElement.getAttribute('xlink:href')
    expect(href).to.eq('#icon-loading')

}
{

  let Constructor=Vue.extend(bButton)
  let div=document.createElement('div')
   document.body.appendChild(div)
  let button=new Constructor({
    propsData:{
      icon:'setting'
    }
  })
  button.$mount(div)
  let svg=button.$el.querySelector('svg')
  let {order}=window.getComputedStyle(svg)
  expect(order).to.eq('1')
  button.$el.remove()
  button.$destroy()

}
{

  let Constructor=Vue.extend(bButton)
  let div=document.createElement('div')
  document.body.appendChild(div)
  let button=new Constructor({
    propsData:{
      icon:'setting',
      iconPosition:'right'
    }
  })
  button.$mount(div)
  let svg=button.$el.querySelector('svg')
  let {order}=window.getComputedStyle(svg)
  expect(order).to.eq('2')
  button.$el.remove()
  button.$destroy()

}
{
  //mock
  let Constructor=Vue.extend(bButton)
  let iButton=new Constructor({
    propsData:{
      icon:'setting',
    }
  })
  iButton.$mount()
  iButton.$on('click',function (){
    console.log(1);
  })
  let button=iButton.$el
  console.log(button);
  button.click()

}

