import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HeaderStyled from './components/HeaderStyled';
import Navigation from './components/Navigation';
import CryptoListPage from './pages/CryptoListPage';
import CurrenciesListPage from './pages/CurrenciesListPage';
import IndexListPage from './pages/IndexListPage';
import MarketsListPage from './pages/MarketsListPage';
import CryptoDetailsPage from './pages/CryptoDetailsPage';

function App() {
  return (
    <div>
      <HeaderStyled>
        <h1>Stockmarket</h1>
        <Navigation />
      </HeaderStyled>

      <Switch>

        <Route 
          path="/crypto/:id"
          component={CryptoDetailsPage}
        />

        <Route path="/crypto">
          <CryptoListPage />
        </Route>


        <Route path="/currencies">
          <CurrenciesListPage />
        </Route>

        <Route path="/indexes">
          <IndexListPage />
        </Route>

        <Route path="/markets">
          <MarketsListPage />
        </Route>

        <Route path="/"></Route>

      </Switch>
    </div>
  );
}

export default App;
