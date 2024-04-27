import './App.css';
import React from 'react';
import RoutesWeb from './routes';
import { createBrowserHistory } from 'history'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import karina  from './karina.jpg'

const history = createBrowserHistory()

function App() {
  return (
    <div className="App">
      <RoutesWeb history={history}/>
      <FloatingWhatsApp
        phoneNumber='56975765403'
        accountName='Karina Vera'
        chatMessage='Hola! ¿Necesitas Ayuda?'
        notification={true}
        statusMessage='En Linea'
        avatar={karina}
      ></FloatingWhatsApp>
      
{/*         <a href="https://api.whatsapp.com/send?phone=56959581552" target='_blank'>Contáctanos por WhatsApp</a> */}
    </div>
  );
}

export default App;
