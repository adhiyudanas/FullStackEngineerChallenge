<template>
  <div class="employee-thumbnail">
    <!--
      when employee thumbnail is clicked, we call Employee Detail component to view employee Information
      Including biodata and review for each employee
    -->
    <div class="thumbnail-wrapper">
      <div class="thumbnail" v-for="(element, index) in employeeData" :key="index" @click="showEmployeeDetail(index)">
        <h3>Employee {{index + 1}}</h3>
        <span class="employee-span employee-name">Name: {{element.name}}</span>
        <span class="employee-span employee-bod">Date of Birth: {{element.bod}}</span>
        <span class="employee-span employee-department">Department: {{element.department}}</span>
      </div>
    </div>
    <div class="detail-background" v-show="showDetail">
      <!-- show the employee detail here-->
      <EmployeeDetail v-if="showDetail" :employeeInformation="employeeData[detailIndex]"/>
    </div>
    <link rel="stylesheet" type="text/css" href="../assets/css/object/component/employeeThumbnail.css">
  </div>
</template>

<script>
import EmployeeDetail from '@/components/admin/EmployeeDetail.vue'

let showDetail = false
let detailIndex = 0

export default {
  name: 'EmployeeThumbnail',
  components: {
    EmployeeDetail
  },
  props: ['employeeData'],
  data () {
    return {
      showDetail,
      detailIndex
    }
  },
  watch: {
  },
  methods: {
    // toggle the element and show the employee detail
    showEmployeeDetail (index) {
      this.showDetail = true
      this.detailIndex = index
    },
    // close the detail window
    closeDetail () {
      this.showDetail = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.employee-thumbnail {
    width: 100%;
    height: auto;
}

.thumbnail-wrapper {
    width: 90%;
    height: 37vw;
    padding: 5vw;
    border: solid 1px black;
}

.thumbnail {
    width: 25%;
    height: 15vw;
    float: left;
    padding: 1vw;
    border: solid 1px;
    margin-right: 5px;
    color: white;
    background:#fb4400;
}

.thumbnail:hover {
  background:#8e1c00;
  cursor: pointer;
}

.employee-span {
  width: 100%;
  float: left;
}

.detail-background {
    height: 85%;
    width: 99%;
    position: absolute;
    top: 2vw;
    background: #A8A8A8;
}
</style>
