import React from "react";
import './App.css';
// import ThemeProvider from './theme';
import { SnackbarProvider } from 'notistack'; // Import SnackbarProvider
import Router from './routes';

function App() {
  return (
    // <ThemeProvider>
    <SnackbarProvider
      // maxSnack={3}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <Router />
    </SnackbarProvider>
    // </ThemeProvider>
  );
}

export default App;
