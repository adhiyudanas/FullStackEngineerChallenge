<template>
  <div class="employee-wrapper">
    <Header :userType="'Employee'"/>
    <div class="feedback-wrapper">
      <div class="section received-feedback">
        <h3>Feedbacks</h3>
        <ul v-if="dispFeedback">
          <li v-for="(element, index) in feedbacks" :key="index">{{feedbacks[index].review_content}}</li>
          <form>
            <input name="feedback-area" type="text" value="">
            <label><button>Submit Feedback</button></label>
          </form>
        </ul>
      </div>
      <div class="section requested-feedback">
        <h3>Requested Review</h3>
        <ul v-if="dispFeedbackRequest">
          <li v-for="(element, index) in feedbackRequest" :key="index">
            Requested feedback to: {{feedbackRequest[index].target_user_id}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import {getFeedbacks, getRequestFeedbacks} from '@/api'

let feedbacks
let feedbackRequest
let dispFeedback = false
let dispFeedbackRequest = false

export default {
  name: 'EmployeeView',
  components: {
    Header
  },
  data () {
    return {
      feedbacks,
      feedbackRequest,
      dispFeedback,
      dispFeedbackRequest
    }
  },
  mounted () {
    // this.$route.params contains user id
    // after the component is mounted, we query the employee information
    // In the future, we need to handle these requests using promise to avoid system stopping
    getFeedbacks(this.$route.params.user_id)
      .then(data => {
        this.dispFeedback = true
        this.feedbacks = data.data
      })
      .catch(err => alert(err))
    getRequestFeedbacks(this.$route.params.user_id)
      .then(data => {
        this.dispFeedbackRequest = true
        this.feedbackRequest = data.data
      })
      .catch(err => alert(err))
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.section {
  height: 20vw;
}

li {
  width: 32vw;
}
</style>
