import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import Pokemon from '../pokemon/pokemon'
import Details from '../component/tableDetails'
import Regiao from '../regioes/regioes'

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Pokemon} exact />
      <Route path="/pokemon/:name" component={Details} />
      <Route path="/regiao" component={Regiao} />
    </Switch>
  </BrowserRouter>
)

export default AppRouter
