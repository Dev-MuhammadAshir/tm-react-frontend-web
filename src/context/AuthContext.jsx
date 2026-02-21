import { createContext, useState, useContext, useEffect } from 'react'

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading user from localStorage
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setLoading(false)
  }, [])

  const login = async (email, password) => {
    // Mock login – in real app call API
    const mockUser = { id: 1, email, name: 'John Doe' }
    localStorage.setItem('user', JSON.stringify(mockUser))
    localStorage.setItem('token', 'mock-jwt-token')
    setUser(mockUser)
    return mockUser
  }

  const logout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    setUser(null)
  }

  const register = async (userData) => {
    // Mock register
    const mockUser = { id: 1, ...userData }
    localStorage.setItem('user', JSON.stringify(mockUser))
    localStorage.setItem('token', 'mock-jwt-token')
    setUser(mockUser)
    return mockUser
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  )
}