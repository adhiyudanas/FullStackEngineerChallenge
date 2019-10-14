<template>
  <div id="app">
    <!--add normalize css-->
    <link rel="stylesheet" type="text/css" href="../src/assets/css/Normalize.css" />
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import '../src/assets/css/layout/app.css';
</style>
