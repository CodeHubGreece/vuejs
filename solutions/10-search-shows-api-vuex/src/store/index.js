import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import axios from "axios"

export default new Vuex.Store({
    state: {
        shows: [],
        loading: false
    },
    actions: {
        getShows( { dispatch, commit, state }, query){

            commit('SET_LOADING', true)

            axios.get(`search/shows?q=${query}`)
                .then(response => {
                    commit('SET_SHOWS', response.data)
                    commit('SET_LOADING', false)
                })
        }
    },
    mutations: {
        SET_SHOWS(state, payload){
            state.shows = payload
        },
        SET_LOADING(state, payload){
            state.loading = payload
        }
    }
})