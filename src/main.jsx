import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
<<<<<<< Updated upstream
import { FirebaseProvider } from './components/context/firebase.jsx'
=======
import { FirebaseProvider } from '../src/context/firebase.jsx'
import { Provider } from 'react-redux'
import { store } from './components/store/store.js'
>>>>>>> Stashed changes

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <FirebaseProvider>
      <App />
    </FirebaseProvider>
    
  // </React.StrictMode>
)
