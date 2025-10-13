import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDalC7hB56pWgWoipQ7WG7kMXEwPIgRIu8",
  authDomain: "newapp-76f52.firebaseapp.com",
  projectId: "newapp-76f52",
  storageBucket: "newapp-76f52.firebasestorage.app",
  messagingSenderId: "100364984771",
  appId: "1:100364984771:web:178ebe758175abeca91d76"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)
export default app
