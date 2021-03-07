import Vue from "vue";
import Vuex from "vuex";
import testTable from "./module/testTable"
Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {testTable
  },
});
export default store;