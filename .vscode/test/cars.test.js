import Vue from 'https://cdn.jsdelivr.net/npm/vue/dist/vue.js'
import app_cars from '../../cars'

describe('app_cars', () => {
    // Проверка опций компонента
    it('has a created hook', () => {
      expect(typeof app_cars.created).toBe('function')
    })
  
    // Оценка результатов методов в опциях
    it('sets the correct default data', () => {
      expect(typeof app_cars.data).toBe('function')
      const defaultData = app_cars.data()
      expect(defaultData.message).toBe('hello!')
    })
  
    // Монтирование экземпляра и оценка вывода отрисовки
    it('renders the correct message', () => {
      const Constructor = Vue.extend(app_cars)
      const vm = new Constructor().$mount()
      expect(vm.$el.textContent).toBe('bye!')
    })
  })