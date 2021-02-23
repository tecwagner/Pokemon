import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

//Importando componente
import Pokemon from '../pokemon/pokemon'
import Details from '../component/tableDetails'

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Pokemon} exact />
      <Route path="/pokemon/:name" component={Details} />
    </Switch>
  </BrowserRouter>
)

export default AppRouter
