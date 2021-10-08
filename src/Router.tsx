import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Home, Login } from "./pages"

export const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/home'>
        <Home />
      </Route>
      <Route path='*'>
        <Login />
      </Route>
    </Switch>
  </BrowserRouter>
)
