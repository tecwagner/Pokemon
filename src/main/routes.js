import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

//Importando componente
import Pokemon from '../pokemon/pokemon'

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={Pokemon} exact />
    </Switch>
  </BrowserRouter>
)

export default AppRouter
