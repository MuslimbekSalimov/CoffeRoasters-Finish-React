import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider as Proshhk } from './Components/Context/Localization';
import { Provider as ProviderTheme } from './Components/Context/Theme';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
      <ProviderTheme>
         <Proshhk>
           <App />
        </Proshhk>
      </ProviderTheme>
   </BrowserRouter>
  </React.StrictMode>
);