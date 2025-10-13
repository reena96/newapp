# Clock App with Firebase Authentication

A modern clock application built with React and Firebase that features user authentication (login/signup) and displays a real-time digital clock.

## Features

- User authentication (Sign Up / Sign In) using Firebase
- Real-time digital clock display
- Responsive design with beautiful gradient UI
- User-specific welcome message
- Secure logout functionality

## Tech Stack

- **Frontend:** React 18 with Vite
- **Backend:** Firebase Authentication
- **Styling:** CSS3 with modern animations

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v16 or higher)
- npm or yarn
- A Firebase account

## Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or select an existing one
3. Enable Authentication:
   - Go to Authentication > Sign-in method
   - Enable "Email/Password" provider
4. Get your Firebase configuration:
   - Go to Project Settings > General
   - Scroll down to "Your apps" section
   - Click on the web icon (</>) to create a web app
   - Copy the configuration object

## Installation

1. Install dependencies:
```bash
npm install
```

2. Configure Firebase:
   - Open `src/firebase.js`
   - Replace the placeholder values with your Firebase configuration:
   ```javascript
   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_AUTH_DOMAIN",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_STORAGE_BUCKET",
     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
     appId: "YOUR_APP_ID"
   }
   ```

   Alternatively, you can use environment variables:
   - Copy `.env.example` to `.env`
   - Fill in your Firebase configuration values
   - Update `src/firebase.js` to use environment variables

## Running the Application

Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Building for Production

Build the application:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
clock-app/
├── src/
│   ├── components/
│   │   ├── Login.jsx         # Login/Signup component
│   │   ├── Login.css          # Login styles
│   │   ├── Clock.jsx          # Clock display component
│   │   └── Clock.css          # Clock styles
│   ├── context/
│   │   └── AuthContext.jsx    # Authentication context
│   ├── firebase.js            # Firebase configuration
│   ├── App.jsx                # Main app component
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles
├── index.html
├── package.json
└── vite.config.js
```

## Usage

1. **Sign Up:** Create a new account with your email and password
2. **Sign In:** Log in with your existing credentials
3. **View Clock:** Once authenticated, you'll see the real-time clock display
4. **Logout:** Click the logout button to sign out

## Security Notes

- Never commit your `.env` file or Firebase configuration with actual values to version control
- The `.gitignore` file is configured to exclude sensitive files
- Make sure to set up Firebase security rules in your Firebase console

## License

MIT
