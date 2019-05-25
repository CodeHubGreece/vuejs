<template>
  <div>
      <br>
      <div class="container-fluid">
          <div class="row">
              <div class="col-sm-12">
                  <form action="">
                    <div class="form-group">
                        <label for="searchValue">Search for a TV Show</label>
                        <input v-model="searchValue" style="max-width:500px;" type="text" class="form-control" id="searchValue" placeholder="Enter the name of the show...">
                    </div>
                </form>
              </div>
          </div>
      </div>
    <br>
    <div class="shows">
      <div v-for="(show, idx) in filteredShows" :key="idx" class="show">
        <img :src="show.image.medium" :alt="show.name">
        <h2 class="name" v-text="show.name"></h2>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "TVShows",
  data() {
    return {
        searchValue: '',
        shows: []
    };
  },
  computed: {
      filteredShows() {
          const searchValue = this.searchValue.trim().toLowerCase()
          let filteredShows = this.shows

          if(searchValue == ''){
              return filteredShows
          }

          filteredShows = filteredShows.filter( show => {
              if (show.name.toLowerCase().includes(searchValue)){
                  return show;
              }
          })

          // Return an array with the filtered data.
          return filteredShows;
    }
  },
  methods: {
    async getTVShows() {
      try {
        const response = await axios.get("shows");
        this.shows = response.data;
      } catch (error) {
        console.log(error);
      }
    }
  },
  created() {
    this.getTVShows();
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
img {
  width: 210px;
  height: 295px;
  display: block;
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
</style>




