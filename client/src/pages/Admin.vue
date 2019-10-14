<template>
  <div class="admin">
      <Header :userType="'Admin'"/>
      <div class="admin-wrapper">
        <label class="addNewEmployee-label"><button @click="addNewEmployee">Add New Employee</button></label>
        <!-- pass the employee Data to child component for creating employee list-->
        <EmployeeThumbnail :employeeData="employeeData"/>
        <AddNewEmployee v-if="newEmpFlag"/>
      </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import EmployeeThumbnail from '@/components/admin/EmployeeThumbnail.vue'
import AddNewEmployee from '@/components/admin/NewEmployee.vue'
import {getEmployees} from '@/api'

let employeeData
let newEmpFlag = false

export default {
  components: {
    Header,
    EmployeeThumbnail,
    AddNewEmployee
  },
  name: 'LoginPage',
  data () {
    return {
      employeeData,
      newEmpFlag
    }
  },
  methods: {
    addNewEmployee () {
      this.newEmpFlag = !this.newEmpFlag
    }
  },
  mounted () {
    getEmployees()
      .then(data => {
        this.employeeData = data.data
      })
      .catch(err => alert(err))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.addNewEmployee-label {
    top: 3vw;
    left: 42vw;
    position: relative;
}
</style>
