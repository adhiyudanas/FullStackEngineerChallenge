<template>
  <div class="employee-detail">
    <div class="detail-header">
      <h3>{{employeeInformation.name}}</h3>
      <label class="cancel-button"><button @click="closeDetail">Exit</button></label>
    </div>
    <div class="section feedback-section">
      <span>Feedback</span>
      <ul v-if="dispFeedback">
        <li v-for="(element, index) in feedbacks" :key="index">{{feedbacks[index].review_content}}</li>
      </ul>
    </div>
    <div class="section requested-feedback-section">
      <span>Requested Feedback</span>
      <ul v-if="dispFeedbackRequest">
        <li v-for="(element, index) in feedbackRequest" :key="index">
          Requested feedback to: {{feedbackRequest[index].target_user_id}}
        </li>
      </ul>
    </div>
      <link rel="stylesheet" type="text/css" href="/assets/css/object/component/employeeDetail.css">
  </div>
</template>

<script>
import {getFeedbacks, getRequestFeedbacks} from '@/api'

let feedbacks
let feedbackRequest
let dispFeedback = false
let dispFeedbackRequest = false

export default {
  name: 'EmployeeDetail',
  props: ['employeeInformation'],
  data () {
    return {
      feedbacks,
      feedbackRequest,
      dispFeedback,
      dispFeedbackRequest
    }
  },
  methods: {
    closeDetail () {
      // call parent method for closing the detail window
      this.$parent.closeDetail()
    }
  },
  mounted () {
    // get all the feedbacks and request
    // in the future need to be handled inside a promise
    getFeedbacks(this.employeeInformation.user_id)
      .then(data => {
        this.feedbacks = data.data
        if (data.data.length !== 0) {
          this.dispFeedback = true
        }
      })
      .catch(err => alert(err))
    getRequestFeedbacks(this.employeeInformation.user_id)
      .then(data => {
        this.feedbackRequest = data.data
        if (data.data.length !== 0) {
          this.dispFeedbackRequest = true
        }
      })
      .catch(err => alert(err))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.employee-detail {
  width: 40vw;
  height: 30vw;
  position: absolute;
  background: white;
  top: calc(50% - 15vw);
  left: calc(50% - 20vw);
}

.detail-header {
  height: 20%;
  border-bottom: solid 1px black;
}

.detail-header h3 {
  float: left;
  width: 80%;
}

.cancel-button {
  position: relative;
  top: 33%;
}

.section {
  height: 40%;
}
</style>
