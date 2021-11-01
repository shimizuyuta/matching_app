import { BrowserRouter, Route,Switch } from 'react-router-dom';
import Register from './components/Register'
import Login from './components/Login';
import NotFound from './components/NotFound'
import Home from './components/Home'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" render={(props)=><Register{...props}/>}/>
        <Route exact path="/" component={Home}/>
        <Route path="*" component={NotFound} />
        <Route path="/notFound" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
