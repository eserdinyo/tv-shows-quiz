import Vue from 'vue';
import Vuex from 'vuex';

import { seriesRef } from "@/firebase";
import firebase from 'firebase';

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
    getOneShow({ commit }, id) {
      return new Promise((resolve, reject) => {
        seriesRef
          .doc(id)
          .get().then(res => {
            commit('SET_ONE_SHOW', res.data());
            resolve(res);
          })

      })

    },
    addShow({ _ }, payload) {
      // ADD DATA TO FIRESTORE
      return new Promise((resolve, reject) => {
        seriesRef
          .add({
            name: payload.name,
            coverImage: payload.coverImage,
            bgImage: payload.bgImage,
            music: payload.music
          }).then(res => {
            resolve(res)
          })
      })
    },
    addCharacter({ _ }, payload) {
      return new Promise((resolve, reject) => {
        const data = {
          name: payload.character.name,
          imageUrl: payload.character.imageUrl,
          answers: payload.character.answers
        }
        seriesRef
          .doc(payload.id).update({
            characters: firebase.firestore.FieldValue.arrayUnion(data)
          }).then(res => {
            if (!res)
              resolve(200)
          })
      })
    }
  }
});
