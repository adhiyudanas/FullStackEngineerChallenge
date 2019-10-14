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
 * collect employee feedback
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
 * add new employee
 */

/**
 * submit feedback
 */

/**
 *
 */
