import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FirebaseProvider } from './components/context/firebase.jsx'
import { Provider } from 'react-redux'
import { store } from './components/store/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <FirebaseProvider>
       <Provider store={store}>
      <App />
      </Provider>
    </FirebaseProvider>
    
  // </React.StrictMode>
)
