import {Route, Switch} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import NotFound from './components/NotFound'
import Home from './components/Home'

const App = () => (
  <div>
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </div>
)

export default App
