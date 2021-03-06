import { Home } from './pages/home';
import './styles/styles.scss';
import { News } from './pages/news';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import React from 'react';
import { Creator } from './pages/creator';
import { User } from './pages/user';
import { Player } from './pages/player';

import { Comparsa } from './pages/creatorCategories/comparsa';
import { Chirigota } from './pages/creatorCategories/chirigota';
import { Cuarteto } from './pages/creatorCategories/cuarteto';
import { Coro } from './pages/creatorCategories/coro';


import { MartinezAres } from './pages/comparsa/MartinezAres';
import { JonathanPerez } from './pages/comparsa/JonathanPerez';
import { TinoTovar } from './pages/comparsa/TinoTovar';
import { KikeRemolino } from './pages/comparsa/KikeRemolino';
import { VeraLuque } from './pages/chirigota/VeraLuque';
import { PuertoReal } from './pages/chirigota/PuertoReal';
import { Barrio } from './pages/chirigota/Barrio';
import { Selu } from './pages/chirigota/Selu';

import { LosNiños } from './pages/cuarteto/LosNiños';
import { Gago } from './pages/cuarteto/Gago';
import { JaviAguilera } from './pages/cuarteto/JaviAguilera';

import { DavidFernandez } from './pages/coro/DavidFernandez';
import { JulioPardo } from './pages/coro/JulioPardo';
import { NandiMigueles } from './pages/coro/NandiMigueles';
import { LuisRivero } from './pages/coro/LuisRivero';


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
            <Route path="/news" exact component={News} />
            <Route path="/creator" exact component={Creator} />
            <Route path="/user" exact component={User} />
            <Route path="/player" exact component={Player} />

            <Route path="/creator/comparsa" exact component={Comparsa} />
            <Route path="/creator/chirigota" exact component={Chirigota} />
            <Route path="/creator/cuarteto" exact component={Cuarteto} />
            <Route path="/creator/coro" exact component={Coro} />

            <Route path="/creator/comparsa/martinez_ares" component={MartinezAres} />
            <Route path="/creator/comparsa/el_jona" component={JonathanPerez} />
            <Route path="/creator/comparsa/kike_remolino" component={KikeRemolino} />
            <Route path="/creator/comparsa/tino_tovar" component={TinoTovar} />

            <Route path="/creator/chirigota/vera_luque" component={VeraLuque} />
            <Route path="/creator/chirigota/puerto_Real" component={PuertoReal} />
            <Route path="/creator/chirigota/del_barrio" component={Barrio} />
            <Route path="/creator/chirigota/el_selu" component={Selu} />


            <Route path="/creator/cuarteto/los_niños" component={LosNiños} />
            <Route path="/creator/cuarteto/el_gago" component={Gago} />
            <Route path="/creator/cuarteto/javi_aguilera" component={JaviAguilera} />

            <Route path="/creator/coro/david_fernandez" component={DavidFernandez} />
            <Route path="/creator/coro/julio_pardo" component={JulioPardo} />
            <Route path="/creator/coro/nandi_migueles" component={NandiMigueles} />
            <Route path="/creator/coro/luis_rivero" component={LuisRivero} />

          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;

