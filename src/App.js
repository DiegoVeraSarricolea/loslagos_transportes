import './App.css';
import React from 'react';
import RoutesWeb from './routes';
import MyAppBar from './components/MyAppBar'
import Footer from './components/Footer'

import { createBrowserHistory } from 'history'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import GlobalStyles from '@mui/material/GlobalStyles';
import CssBaseline from '@mui/material/CssBaseline';

import karina  from './karina.jpg'

const defaultTheme = createTheme()
const history = createBrowserHistory()

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
        <CssBaseline />
        <MyAppBar />
        <RoutesWeb history={history}/>
        <FloatingWhatsApp
          phoneNumber='56975765403'
          accountName='Karina Vera'
          chatMessage='Hola! ¿Necesitas Ayuda?'
          notification={true}
          statusMessage='En Linea'
          avatar={karina}
        ></FloatingWhatsApp>
        <Footer />
      </ThemeProvider>
      
{/*         <a href="https://api.whatsapp.com/send?phone=56959581552" target='_blank'>Contáctanos por WhatsApp</a> */}
    </div>
  );
}

export default App;
