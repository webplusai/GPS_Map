import Vue from "vue";
import Vuex from "vuex";
import tracking from "../logic/tracking.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { samples: [], done: false },
  mutations: {
    setSamples(state, samples) {
      state.samples.push(...samples);
    },
    setDone(state) {
      state.done = true;
    }
  },
  actions: {
    async fillSamples({ commit }, urls) {
      for (const url of urls) {
        const data = await tracking.getTrackingData(url);
        commit("setSamples", data.samples);
      }
      commit("setDone");
    }
  },
  getters: {
    markers: state => {
      return state.samples.map(sample => {
        return { lat: sample.LAT, lng: sample.LNG };
      });
    }
  },
  modules: {}
});
