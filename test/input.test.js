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
})

