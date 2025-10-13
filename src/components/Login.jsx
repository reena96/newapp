import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import './Login.css'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSignUp, setIsSignUp] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { login, signup } = useAuth()

  async function handleSubmit(e) {
    e.preventDefault()

    if (!email || !password) {
      return setError('Please fill in all fields')
    }

    if (password.length < 6) {
      return setError('Password must be at least 6 characters')
    }

    try {
      setError('')
      setLoading(true)

      if (isSignUp) {
        await signup(email, password)
      } else {
        await login(email, password)
      }
    } catch (error) {
      console.error('Authentication error:', error)

      switch (error.code) {
        case 'auth/email-already-in-use':
          setError('This email is already registered')
          break
        case 'auth/invalid-email':
          setError('Invalid email address')
          break
        case 'auth/user-not-found':
          setError('No account found with this email')
          break
        case 'auth/wrong-password':
          setError('Incorrect password')
          break
        case 'auth/weak-password':
          setError('Password should be at least 6 characters')
          break
        case 'auth/invalid-credential':
          setError('Invalid email or password')
          break
        default:
          setError('Failed to authenticate. Please try again.')
      }
    } finally {
      setLoading(false)
    }
  }

  function toggleMode() {
    setIsSignUp(!isSignUp)
    setError('')
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Clock App</h1>
        <h2 className="login-subtitle">
          {isSignUp ? 'Create Account' : 'Welcome Back'}
        </h2>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              disabled={loading}
              autoComplete="email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              disabled={loading}
              autoComplete={isSignUp ? 'new-password' : 'current-password'}
            />
          </div>

          <button
            type="submit"
            className="submit-button"
            disabled={loading}
          >
            {loading ? 'Please wait...' : (isSignUp ? 'Sign Up' : 'Sign In')}
          </button>
        </form>

        <div className="toggle-mode">
          <p>
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}
            <button
              type="button"
              onClick={toggleMode}
              className="toggle-button"
              disabled={loading}
            >
              {isSignUp ? 'Sign In' : 'Sign Up'}
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
