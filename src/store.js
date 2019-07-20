import Vue from 'vue';
import Vuex from 'vuex';

import { seriesRef } from "@/firebase";

Vue.use(Vuex);



export default new Vuex.Store({
  state: {
    series: [],
    show: {},
  },
  mutations: {
    SET_SERIES(state, payload) {
      state.series = payload;
    },
    SET_ONE_SHOW(state, payload) {
      state.show = payload;
    },
    CLEAR_BG_IMAGE(state) {
      state.show = {};
    }
  },
  actions: {
    async getAllSeries({ commit }) {
      // GET DATA FROM FIRESTORE
      const snapshot = await seriesRef.get();

      const res = snapshot.docs.map(res => {
        const data = res.data();
        data.id = res.id;
        return data;
      });
      commit('SET_SERIES', res)
    },
    async getOneShow({ commit }, id) {
      const res = await seriesRef
        .doc(id)
        .get()
      commit('SET_ONE_SHOW', res.data());
    }
  }
});
