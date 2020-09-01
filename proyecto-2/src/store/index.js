import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    frutas: [
      { nombre: 'Manzana', cantidad: 11 },
      { nombre: 'Fresa', cantidad: 10 },
      { nombre: 'Naranja', cantidad: 4 }
    ]
  },
  mutations: {
    aumentar(state, index) {
      state.frutas[index].cantidad ++
    },
    reiniciar(state) {
      state.frutas.forEach(fruta => {
        fruta.cantidad = 0
      });
    }
  },
  actions: {
  },
  modules: {
  }
})
