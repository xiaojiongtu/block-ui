import  Vue from 'vue'
import chai from 'chai'
import bButton from '../src/b-button.vue'
import sinon from "sinon";
const expect=chai.expect


import spies from 'chai-spies'
chai.use(spies)

Vue.config.productionTip = false
Vue.config.devtools = false

//测试按钮含有icon
describe('bButton', () => {
  it('存在.', () => {
    expect(bButton).to.be.ok
  })
  it('可以设置icon.', () => {
    const Constructor = Vue.extend(bButton)
    const vm = new Constructor({
      propsData: {
        icon: 'settings'
      }
    }).$mount()
    const useElement = vm.$el.querySelector('use')
    expect(useElement.getAttribute('xlink:href')).to.equal('#icon-settings')
    vm.$destroy()
  })
  it('可以设置loading.', () => {
    const Constructor = Vue.extend(bButton)
    const vm = new Constructor({
      propsData: {
        icon: 'settings',
        loading: true
      }
    }).$mount()
    const useElements = vm.$el.querySelectorAll('use')
    expect(useElements.length).to.equal(1)
    expect(useElements[0].getAttribute('xlink:href')).to.equal('#icon-loading')
    vm.$destroy()
  })
  it('icon 默认的 order 是 1', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(bButton)
    const vm = new Constructor({
      propsData: {
        icon: 'settings',
      }
    }).$mount(div)
    const icon = vm.$el.querySelector('svg')
    expect(getComputedStyle(icon).order).to.eq('1')
    vm.$el.remove()
    vm.$destroy()
  })
  it('设置 iconPosition 可以改变 order', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(bButton)
    const vm = new Constructor({
      propsData: {
        icon: 'settings',
        iconPosition: 'right'
      }
    }).$mount(div)
    const icon = vm.$el.querySelector('svg')
    expect(getComputedStyle(icon).order).to.eq('2')
    vm.$el.remove()
    vm.$destroy()
  })
  it('点击 button 触发 click 事件', () => {
    const Constructor = Vue.extend(bButton)
    const vm = new Constructor({
      propsData: {
        icon: 'settings',
      }
    }).$mount()

    // const callback = sinon.spy();
    let spy=chai.spy(function (){})
    vm.$on('click',spy)
    let button=vm.$el
    button.click()
    expect(spy).to.have.been.called()

  })
})
