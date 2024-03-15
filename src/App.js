import React from "react";
import './App.css';
import { SnackbarProvider } from 'notistack';
import Router from './routes';

function App() {
  return (    
    <SnackbarProvider anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
      <Router />
    </SnackbarProvider>    
  );
}

export default App;
