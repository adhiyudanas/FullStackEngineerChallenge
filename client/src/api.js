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
