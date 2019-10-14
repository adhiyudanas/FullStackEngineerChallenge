<template>
  <div class="login-wrapper">
    <h3>Employee performance Review</h3>
    <form class="modal-content animate">
      <div class="container">
        <label for="uname"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="uname" required @change="handleInput">
        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required @change="handleInput">
        <button type="submit" @click="loginProcess">Login</button>
      </div>
    </form>
    <span>For development purpose we use dummy user and employee. You can use "admin" or "employee" for both username and password</span>
  </div>
</template>

<script>
// define the initial variable here
let loginData = {uname: '', psw: ''}

export default {
  name: 'LoginPage',
  data () {
    return {
      loginData
    }
  },
  methods: {
    // insert the username password
    handleInput (event) {
      if (event.target !== undefined) {
        loginData[event.target.name] = event.target.value.toLowerCase()
      }
    },
    loginProcess (event) {
      event.preventDefault()
      if (loginData.uname === 'admin') {
        // go to the admin page
        this.$router.push({name: 'Admin', params: {user_id: loginData.uname}})
      } else if (loginData.uname === 'employee') {
        // go to the employee page
        this.$router.push({name: 'Employee', params: {user_id: loginData.uname}})
      } else {
        alert('user not registered')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../assets/css/object/pages/login.css';
</style>
