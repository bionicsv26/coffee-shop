import Vue from 'vue'
import Vuex from 'vuex'

import links from "@/store/links"
import bestsellers from "@/store/bestsellers";
import goods from "@/store/goods";

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {links, bestsellers, goods},
})

export default store