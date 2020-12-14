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

export default function Routes() {
    return (
        
            
          <Switch>
            <Route path="/indexes/:id" component={IndexDetailPage}>

            </Route>

            <Route 
              path="/crypto/:id"
              component={CryptoDetailsPage}
            />

            <Route path="/crypto">
              <CryptoListPage />
            </Route>


            <Route path="/currencies/:id" component={DetailPageCurrency} />


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
        
    )
}
