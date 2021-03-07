import Axios from "axios";
import {
  testAPi,
  
} from "@/store/api";
import {
  SET_TEST_USER_DATA,
  
} from "@/store/mutation-types";
//import { saveMsg, updateMsg, deleteMsg } from "../erpUtil";

const state = {
 

  schema: {
   
  },
  datalist: []
};

const getters = {
  getTestDataGetters(state){
  return state.datalist;
  }
};
const mutations = {
  [SET_TEST_USER_DATA](state, result) {
    state.datalist = result;  
  }
};
const actions = {
  getTestDataList({ commit }) {
  console.log("test wheather its call or not??");  
    return new Promise((resolve, reject) => {
    Axios.get(testAPi)
        .then(function(response) {
          console.log("ffff",response.data);
          var result = response.data;
          commit("SET_TEST_USER_DATA", result);
          console.log("SET_TEST_USER_DATA",result);
          resolve(response.data);
        })
        .catch(function(error) {         
          console.log(error);
          reject();
        });
    });
  },
};

export default {
  state,
  getters,
  actions,
  mutations
};
