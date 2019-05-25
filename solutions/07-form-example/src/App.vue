<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-6 offset-md-3">
          <base-form></base-form>
        </div>
      </div>
    </div>    
  </div>
</template>

<script>
import BaseForm from './components/BaseForm.vue'

export default {
  name: 'app',
  components: {
    BaseForm
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
