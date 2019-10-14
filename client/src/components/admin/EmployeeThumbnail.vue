<template>
  <div class="employee-thumbnail">
    <link rel="stylesheet" type="text/css" href="/assets/css/object/component/employeeThumbnail.css">
    <!--
          when employee thumbnail is clicked, we call Employee Detail component to view employee Information
          Including biodata and review for each employee
        -->
  </div>
</template>

<script>
import EmployeeDetail from '@/components/admin/EmployeeDetail.vue'

export default {
  name: 'EmployeeThumbnail',
  components: {
    EmployeeDetail
  },
  props: ['employeeData'],
  data () {
    return {
    }
  },
  watch: {
    employeeData: function () {
      console.log(this.employeeData)
      // create thumbnail here
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
