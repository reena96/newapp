import { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import './Clock.css'

function Clock() {
  const [time, setTime] = useState(new Date())
  const { currentUser, logout } = useAuth()

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleLogout = async () => {
    try {
      await logout()
    } catch (error) {
      console.error('Failed to log out:', error)
    }
  }

  const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, '0')
    const minutes = date.getMinutes().toString().padStart(2, '0')
    const seconds = date.getSeconds().toString().padStart(2, '0')
    return { hours, minutes, seconds }
  }

  const formatDate = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    return date.toLocaleDateString('en-US', options)
  }

  const { hours, minutes, seconds } = formatTime(time)

  return (
    <div className="clock-container">
      <div className="clock-card">
        <div className="clock-header">
          <h2>Welcome, {currentUser?.email}</h2>
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </div>

        <div className="clock-display">
          <div className="time">
            <span className="time-unit">{hours}</span>
            <span className="time-separator">:</span>
            <span className="time-unit">{minutes}</span>
            <span className="time-separator">:</span>
            <span className="time-unit">{seconds}</span>
          </div>
          <div className="date">{formatDate(time)}</div>
        </div>

        <div className="clock-info">
          <div className="info-item">
            <span className="info-label">Hour</span>
            <span className="info-value">{hours}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Minute</span>
            <span className="info-value">{minutes}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Second</span>
            <span className="info-value">{seconds}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Clock
