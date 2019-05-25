<template>
  <div>
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
    <div class="shows">
      
      <div v-for="( { show }, idx) in shows" :key="idx" class="show">
        <div class="img-cnt">
          <img v-if="show.image && show.image.medium" :src="show.image.medium" :alt="show.name">
        </div>
        
        <h2 class="name" v-text="show.name"></h2>
      </div>

      <div v-if="shows.length == 0">No results found</div>
      
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: "TVShows",
  data() {
    return {
        loading: false,
        searchValue: '',
        shows: [],
        tOut: false
    };
  },
  methods: {
    searchForShow(time) {

        let that = this
        const sValue = that.searchValue.trim().toLowerCase()

        if (sValue == ''){
          that.shows = []
          return
        }

        window.clearTimeout(that.tOut)

        that.tOut = setTimeout( () => {
          that.getShows()
        }, time);
    },
    getShows(){
        let that = this
       
        const sValue = that.searchValue.trim().toLowerCase()

        //Start loading
        that.loading = true

        axios.get(`search/shows?q=${sValue}`)
        .then(response => {
          that.shows = response.data;
          that.loading = false
        })
    }
  }
};
</script>

<style>
  .shows {
    margin-left: 10px;
  }
  .show {
    float: left;
    max-width: 210px;
    margin: 0 0 10px 10px;
  }
  .img-cnt {
    width: 210px;
    height: 295px;
    display: block;
    background: gray;
  }
  .name {
    font-family: "Arial";
    font-weight: normal;
    font-size: 16px;
    background-color: #3C948B;
    color: #b9e3de;
    text-align: center;
    margin: 0;
    padding: 5px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .loader{
    margin:0 0 0 5px;
    width: 20px;
    height: 20px;
  }
</style>




