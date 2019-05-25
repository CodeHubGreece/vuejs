<template>
  <div id="app">
    <br>
      <div class="container-fluid">
          <div class="row">
              <div class="col-sm-12">
                  <form @submit.prevent>
                    <div class="form-group">
                        <label for="searchValue">Search for a TV Show</label>
                        <div class="loader spinner-border" v-if="loading">
                          <span class="sr-only">Loading...</span>
                        </div>
                        <input v-model="searchValue" style="max-width:500px;" @input="searchForShow(300)" @keyup.enter="searchForShow(0)" type="text" class="form-control" id="searchValue" placeholder="Enter the name of the show...">
                    </div>
                </form>
              </div>
          </div>
      </div>    

    <br>
    <TVShows/>
  </div>
</template>

<script>

import { mapState } from 'vuex'

import TVShows from "./components/TVShows";

export default {
  name: "App",
  data(){
    return{
      searchValue: '',
      tOut: false
    }
  },  
  components: {
    TVShows
  },
  computed:{
    ...mapState({
      loading: state => state.loading
    })
  },
  methods: {
    searchForShow(time) {

        let that = this
        const sValue = that.searchValue.trim().toLowerCase()

        //Empty array of shows in case of no search query
        if (sValue == ''){
          that.$store.commit('SET_SHOWS', [])
          return
        }

        window.clearTimeout(that.tOut)
        
        that.tOut = setTimeout( () => {
          // Dispatch async action to get the shows from the API
          that.$store.dispatch('getShows', sValue)
        }, time);
    },
  }
};
</script>
