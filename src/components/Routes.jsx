import React from 'react'
import { Switch, Route } from 'react-router-dom';
import DetailPage from '../pages/DetailPage';
import ListPage from '../pages/ListPage';
import SearchResultsPage from '../pages/SearchResultsPage'

// Contains all routes to different pages on the site.
export default function Routes() {
    return (
         
          <Switch>

            <Route path="/search" component={SearchResultsPage}/>
          
            <Route path="/indexes/:id" component={DetailPage}/>

            <Route 
              path="/crypto/:id"
              component={DetailPage}
            />

            <Route path="/crypto">
              <ListPage crypto/>
            </Route>

            <Route path="/currencies/:id" component={DetailPage} />

            <Route path="/currencies">
              <ListPage currencies/>
            </Route>        

            <Route path="/indexes">
              <ListPage indexes/>
            </Route>

            <Route path="/market/stock/:market/:stock" component={DetailPage} stocks/>
            
            <Route path="/market/:id" component={ListPage}/>
          
            <Route path="/markets">
              <ListPage markets/>
            </Route>
            
            <Route path="/"></Route>

          </Switch>
        
    )
}
