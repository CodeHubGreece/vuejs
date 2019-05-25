<template>      
  <div class="shows">    
    <div v-for="( { show }, idx) in shows" :key="idx" class="show">
      <div class="img-cnt">
        <img v-if="show.image && show.image.medium" :src="show.image.medium" :alt="show.name">
      </div>
      
      <h2 class="name" v-text="show.name"></h2>
    </div>

    <div v-if="shows.length == 0">No results found</div>
    
  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: "TVShows",
  computed: {
    ...mapState({
      shows: state => state.shows
    })
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




