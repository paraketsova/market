import React from 'react'
import { Switch, Route } from 'react-router-dom';
import CryptoListPage from '../pages/CryptoListPage';
import CurrenciesListPage from '../pages/CurrenciesListPage';
import IndexListPage from '../pages/IndexListPage';
import MarketsListPage from '../pages/MarketsListPage';
import DetailPageCurrency from '../pages/DetailPageCurrency';
import IndexDetailPage from '../pages/IndexDetailPage';
import CryptoDetailsPage from '../pages/CryptoDetailsPage';
import SpecificMarketPage from '../pages/SpecificMarketPage';
import StockDetailPage from '../pages/StockDetailPage';
import DetailPage from '../pages/DetailPage';

export default function Routes() {
    return (
        
            
          <Switch>
            <Route path="/indexes/:id" component={DetailPage}>

            </Route>

            <Route 
              path="/crypto/:id"
              component={DetailPage}
            />

            <Route path="/crypto">
              <CryptoListPage />
            </Route>


            <Route path="/currencies/:id" component={DetailPage} />


            <Route path="/currencies">
              <CurrenciesListPage />
            </Route>        

            <Route path="/indexes">
              <IndexListPage />
            </Route>

            <Route path="/market/stock/:market/:stock" component={DetailPage} stocks/>
            
            <Route path="/market/:id" component={SpecificMarketPage}/>
            
            
            <Route path="/markets">
              <MarketsListPage />
            </Route>

            <Route path="/"></Route>

          </Switch>
        
    )
}
