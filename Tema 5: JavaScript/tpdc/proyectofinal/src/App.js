import { Home } from './pages/home';
import '../src/styles.css';
import { News } from './pages/news';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import React from 'react';

/* import home from "./pages/home";
import News from './pages/news';
 */
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#a276ff',
    },
    secondary: {
      main: '#ffffff',
    },
  },
});



function App() {

  return (
    <>
      <BrowserRouter >
        <ThemeProvider theme={theme} >
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/news" component={News} />
          </Switch>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;


/*import React from 'react';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';

import './App.css';

 function App() {


  return (
    <>
      <BrowserRouter >
      <nav className="">
       <NavLink to="/home" className="">Home</NavLink>
       <NavLink to="/news" className="">Ejercicio 2</NavLink>
       </nav>


       <Route path="/home" component={home}/>
       <Route path="/news" component={news}/>
      </BrowserRouter>

    </>
  );
}

export default App; */