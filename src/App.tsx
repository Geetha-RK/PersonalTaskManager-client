// import './App.css'
import { FC, ReactElement } from 'react';
import { ThemeProvider,CssBaseline } from '@mui/material';
import { customTheme } from './theme/customTheme';
import { Dashboard } from './pages/dashboard/dashboard';

//FC is a type - the functional component interface in ts
//React Element is the interface that returns jsx (it generate the react element)

const App:FC = ():ReactElement => {
  return( 
  <ThemeProvider theme={customTheme}>
    <CssBaseline />
    <Dashboard/>
  </ThemeProvider>);
}

export default App
