import { BrowserRouter, Route,Switch } from 'react-router-dom';
import Register from './components/Register'
import Login from './components/Login';
import NotFound from './components/NotFound'
import Root from './components/Root'
import SearchUser from './components/SearchUser';
import Home from './components/Home';
import {setAuthToken} from  './utils/setAuthToken'
import React, {useEffect, Fragment,useLayoutEffect} from 'react'
import store from "./redux/reducers/index";
import Profile from './components/Profile'
import { Provider } from 'react-redux';
import Navigationbar from './components/Navigationbar'
import ProfileForm from './components/ProfileForm';

const a = () => async dispatch =>{
  dispatch({
    type: "a",
})
}

if (localStorage.token) {
  console.log('localStorage',localStorage)
  store.dispatch(a())
  console.log('ローカルストレージ')
  setAuthToken(localStorage.token)
}


function App() {
  useLayoutEffect(()=>{
    console.log('aaaaaaaaaaaaaaaa')
  })
  //token があればログインとみなす処理


  useEffect(() => {
    console.log('ユーズエフェクト')
    // store.dispatch(loadUser())
  }, [])

  return (
    <Provider store={store}>
    <BrowserRouter>
    <Fragment>
      <Navigationbar/>
      <Switch>
        <Route exact path="/" component={Root} />
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" render={(props)=><Register{...props}/>}/>
        <Root>
          <Switch>
            <Route exact path="/search" component={SearchUser}/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/profile/edit" component={ProfileForm}/>
            <Route path="*" component={NotFound} />
            <Route path="/notFound" component={NotFound} />
          </Switch>
        </Root>
      </Switch>
      </Fragment>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
