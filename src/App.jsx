import { AuthProvider } from './context/AuthContext'
import Login from './components/Login'
import Clock from './components/Clock'
import { useAuth } from './context/AuthContext'

function AppContent() {
  const { currentUser, loading } = useAuth()

  if (loading) {
    return (
      <div style={{ color: 'white', fontSize: '24px' }}>
        Loading...
      </div>
    )
  }

  return currentUser ? <Clock /> : <Login />
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  )
}

export default App
