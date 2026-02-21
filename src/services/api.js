import axios from 'axios'
import * as mockData from '../data/data'

const api = axios.create({
  baseURL: '/api',
  timeout: 10000,
})

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

// Response interceptor to serve mock data
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    // If we want to mock specific endpoints, we can handle here
    // For simplicity, we'll override the request method to return mock data
    // This is a simplified mock – in real app you'd have a proper mock adapter
    const { config } = error
    if (config.url === '/tournaments') {
      return Promise.resolve({ data: mockData.tournaments })
    }
    if (config.url === '/features') {
      return Promise.resolve({ data: mockData.features })
    }
    if (config.url === '/pricing') {
      return Promise.resolve({ data: mockData.pricingPlans })
    }
    if (config.url === '/resources') {
      return Promise.resolve({ data: mockData.resources })
    }
    if (config.url === '/faqs') {
      return Promise.resolve({ data: mockData.faqs })
    }
    if (config.url === '/testimonials') {
      return Promise.resolve({ data: mockData.testimonials })
    }
    // New endpoints
    if (config.url === '/news') {
      return Promise.resolve({ data: mockData.news })
    }
    if (config.url === '/help-topics') {
      return Promise.resolve({ data: mockData.helpTopics })
    }
    if (config.url === '/community-rules') {
      return Promise.resolve({ data: mockData.communityRules })
    }
    return Promise.reject(error)
  }
)

// Override the request method to always return mock data for GET
// This is a quick hack for demo – in production use a real mock adapter
const originalGet = api.get
api.get = async (url, config) => {
  if (url === '/tournaments') return { data: mockData.tournaments }
  if (url === '/features') return { data: mockData.features }
  if (url === '/pricing') return { data: mockData.pricingPlans }
  if (url === '/resources') return { data: mockData.resources }
  if (url === '/faqs') return { data: mockData.faqs }
  if (url === '/testimonials') return { data: mockData.testimonials }
  // New endpoints
  if (url === '/news') return { data: mockData.news }
  if (url === '/help-topics') return { data: mockData.helpTopics }
  if (url === '/community-rules') return { data: mockData.communityRules }
  return originalGet(url, config)
}

export default api