import axios from 'axios'
const BASE_URL = 'http://localhost:3000'

/**
 * collect all employee data
 * present in admin page
 */
export function getEmployees () {
  return axios.get(`${BASE_URL}/employees`)
    .then(response => response.data)
}

/**
 * collect single employee data
 */

export function getSingleEmployee (id) {
  return axios.get(`${BASE_URL}/employees/${id}`)
    .then(response => response.data)
}

/**
 * collect employee feedbacks
 */

export function getFeedbacks (id) {
  return axios.get(`${BASE_URL}/employeeFeedback/${id}`)
    .then(response => response.data)
};

/**
 * collect employe assigned response
 */

export function getRequestFeedbacks (id) {
  return axios.get(`${BASE_URL}/employeeRequestedFeedback/${id}`)
    .then(response => response.data)
};

/**
 * submit feedback
 */

/**
 * submit requested review
 */

/**
 * add new employee
 * to be implemented
 */
