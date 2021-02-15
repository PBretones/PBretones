import { Home } from './pages/home';
import '../src/styles.css';
import { News } from './pages/news';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import React from 'react';
import { Creator } from './pages/creator';
import { User } from './pages/user';
import { Player } from './pages/player';

import { comparsa } from './pages/creatorCategories/comparsa';
import { chirigota } from './pages/creatorCategories/chirigota';
import { cuarteto } from './pages/creatorCategories/cuarteto';
import { coro } from './pages/creatorCategories/coro';

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
      <ThemeProvider theme={theme} >
        <BrowserRouter >
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/news" component={News} />
            <Route path="/creator" exact component={Creator} />
            <Route path="/user" component={User} />
            <Route path="/player" component={Player} />

            <Route path="/creator/comparsa" component={comparsa} />
            <Route path="/creator/chirigota" component={chirigota} />
            <Route path="/creator/cuarteto" component={cuarteto} />
            <Route path="/creator/coro" component={coro} />

          </Switch>
        </BrowserRouter>
      </ThemeProvider>
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