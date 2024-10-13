import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FirebaseProvider } from '../src/context/firebase.jsx'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px', // Change border radiu
          padding: '5px ', // Change padding
          fontSize: '13px', // Change font size
          textTransform: 'none', // Prevent uppercase text
        },
        contained: {
          boxShadow: 'none', // Remove box shadow for contained buttons
        },
        outlined: {
          borderColor: '#74b9ff', // Change border color for outlined buttons
        },
      },
    },
   
  },
  palette: {
    primary: {
      main: '#74b9ff', 
    },
    secondary: {
      main: '#000', 
    },
    
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <ThemeProvider theme={theme}>
  <Provider store={store}>
    <FirebaseProvider>
      <App /> 
    </FirebaseProvider>
    </Provider>
  </ThemeProvider>
  // </React.StrictMode>
)
