<template>
  <div class="header">
    <h3>{{userType}}</h3>
    <label><button @click="logout">Logout</button></label>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: ['userType'],
  data () {
    return {
    }
  },
  methods: {
    logout () {
      this.$router.push({name: 'Employee Review'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  height: 7vw;
  background: mediumpurple;
  border-radius: 5px;
}
</style>
