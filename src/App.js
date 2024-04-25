import './App.css';
import Pricing from './components/Pricing'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import karina  from './karina.jpg'

function App() {
  return (
    <div className="App">
      <Pricing></Pricing>
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
