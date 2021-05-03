import  Vue from 'vue'
import chai from 'chai'
import bInput from '../src/input.vue'
import sinon from "sinon";
const expect=chai.expect


import spies from 'chai-spies'
import bButton from "../src/b-button";
chai.use(spies)

Vue.config.productionTip = false
Vue.config.devtools = false
describe('bInput', () => {
  it('存在.', () => {
    expect(bInput).to.exist
  })
   describe('props',()=>{
     it('should 可以接受value', function () {
       const Constructor = Vue.extend(bInput)
       const vm = new Constructor({
         propsData: {
           value: '1234'
         }
       }).$mount()
       const elemt=vm.$el.querySelector('input')
       expect(elemt.value).to.eq('1234')
       vm.$destroy()
     });
     it('should 接受disabled', function () {
       const Constructor = Vue.extend(bInput)
       const vm = new Constructor({
         propsData: {
           disabled: true
         }
       }).$mount()
       const elemt=vm.$el.querySelector('input')
       expect(elemt.disabled).to.eq(true)
       vm.$destroy()
     });
     it('should 接受readonly', function () {
       const Constructor = Vue.extend(bInput)
       const vm = new Constructor({
         propsData: {
           readonly: true
         }
       }).$mount()
       const elemt=vm.$el.querySelector('input')
       expect(elemt.readOnly).to.eq(true)
       vm.$destroy()
     });
     it('should 接受error', function () {
       const Constructor = Vue.extend(bInput)
       const vm = new Constructor({
         propsData: {
           error: 'hhhhh'
         }
       }).$mount()
       const useElement = vm.$el.querySelector('use')
       expect(useElement.getAttribute('xlink:href')).to.equal('#icon-Shapex')
       const errorMessage=vm.$el.querySelector('.error-message')
       expect(errorMessage.innerText).to.eq('hhhhh')
       vm.$destroy()
     });
   })
   describe('事件',()=>{
     const Constructor = Vue.extend(bInput)
     let vm;
     afterEach(()=>{
       vm.$destroy()
     })
     it('支持change事件 ', function () {
       vm = new Constructor({}).$mount()
       let spy=chai.spy(function (){})
       vm.$on('change',spy)
       let inputEelment=vm.$el.querySelector('input')
       let event=new Event('change')
       inputEelment.dispatchEvent(event)
       expect(spy).to.have.been.called()
     });
   })

})

