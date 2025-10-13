# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based clock application with Firebase authentication. The app features a login/signup page and displays a real-time digital clock to authenticated users.

## Common Commands

### Development
- `npm install` - Install dependencies
- `npm run dev` - Start development server (runs on http://localhost:5173)
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Architecture

### Authentication Flow
The app uses React Context API (`AuthContext`) to manage authentication state globally:
- `src/context/AuthContext.jsx` provides authentication methods (login, signup, logout) and current user state
- Firebase Authentication handles the actual authentication
- `App.jsx` conditionally renders either Login or Clock component based on auth state

### Component Structure
- **App.jsx**: Root component that wraps everything in `AuthProvider` and conditionally renders Login or Clock based on authentication state
- **Login.jsx**: Handles both sign-up and sign-in with form validation and error handling
- **Clock.jsx**: Displays real-time clock with hours, minutes, seconds breakdown, only accessible to authenticated users
- **AuthContext.jsx**: Provides authentication state and methods throughout the app using React Context

### Firebase Configuration
- Firebase config is in `src/firebase.js`
- Uses Firebase Authentication module for email/password authentication
- Configuration values should be replaced with actual Firebase project credentials before running

### State Management
- Authentication state managed via React Context (no external state library)
- Clock time managed with local component state and `setInterval` in `useEffect`
- Loading states handled in both AuthContext and Login component

### Styling Approach
- Component-specific CSS files (Login.css, Clock.css)
- Global styles in index.css
- Uses modern CSS with gradients, animations, and responsive design
- No CSS framework or preprocessor used
