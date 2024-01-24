import axios from 'axios'
import { clearCookie } from './auth'

const axiosSecure = axios.create({
  baseURL: "https://resu-magnet-backend.vercel.app/api/v1",
  withCredentials: true,
})

// intercept response and check for unauthorized responses.
axiosSecure.interceptors.response.use(
  response => response,
  async error => {
    console.log('Error tracked in the interceptor', error.response)
    if (
      error.response &&
      (error.response.status === 401 || error.response.status === 403)
    ) {
      await clearCookie()
      window.location.replace('/signin')
    }

    return Promise.reject(error)
  }
)

export default axiosSecure