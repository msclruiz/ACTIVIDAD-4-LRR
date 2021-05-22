import { StatusBar } from 'expo-status-bar';
import React from 'react';


import CREDITO from "./app/screens/CREDITO";
import AUTORIZACIONES from "./app/screens/autoriza";
import SOLICITUDES from "./app/screens/Solicitudes";
import REPORTES from "./APP/screens/Reportes";

export default function App() {
  return (

    <div>
    <CREDITO />
    
    <AUTORIZACIONES />
    <SOLICITUDES />
    <REPORTES />
    </div>
  );
  
    
 
}
