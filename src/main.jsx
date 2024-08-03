import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FirebaseProvider } from '../src/context/firebase.jsx'
import { Provider } from 'react-redux'
import { store } from './components/store/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <FirebaseProvider>
      <App /> 
    </FirebaseProvider>
    </Provider>
  // </React.StrictMode>
)
