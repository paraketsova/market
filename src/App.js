import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CryptoListPage from './pages/CryptoListPage';
import CurrenciesListPage from './pages/CurrenciesListPage';
import IndexListPage from './pages/IndexListPage';
import MarketsListPage from './pages/MarketsListPage';
import Navigation from './components/Navigation';
import HeaderStyled from './components/HeaderStyled';
import SpecificMarketPage from './pages/SpecificMarketPage';
import StockDetailPage from './pages/StockDetailPage';

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

        <Route path="/market/stock/:market/:stock" component={StockDetailPage}/>
        
        <Route path="/market/:id" component={SpecificMarketPage}/>
        
        
        <Route path="/markets">
          <MarketsListPage />
        </Route>

        <Route path="/"></Route>

      </Switch>
    </div>
  );
}

export default App;
