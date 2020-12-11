import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CryptoListPage from './pages/CryptoListPage';
import CurrenciesListPage from './pages/CurrenciesListPage';
import IndexListPage from './pages/IndexListPage';
import MarketsListPage from './pages/MarketsListPage';
import Navigation from './components/Navigation';
import HeaderStyled from './components/HeaderStyled';

function App() {
  return (
    <div>
      <HeaderStyled>
        <h1>Stockmarket</h1>
        <Navigation />
      </HeaderStyled>

      <Switch>

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
