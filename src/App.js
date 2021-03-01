import './App.css';
import SignUp from './containers/signUp/index'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from './store'
import LogIn from './containers/logIn/index'
import setAuthToken from './utils/setAuthTokenJs'
import jwtDecode from 'jwt-decode';
import { SET_CURRENT_USER } from './actions/types';
import * as types from './actions/types'
import Main from './containers/main/index'
import signOut from './sagas/authSaga'

const store = configureStore();

if (localStorage.token) {
  setAuthToken(localStorage.token)
  const decoded = jwtDecode(localStorage.token)
  store.dispatch({type: types.SET_CURRENT_USER, payload: decoded})
  const currentTime = Date.now() / 1000
  if (decoded.exp < currentTime) {
    store.dispatch(signOut());
  }
}

function App() {
  return( 
  <Provider store={store}> 
    <Router>
      <Switch>
        <Route exact path='/signup' component={SignUp}/>
        <Route exact path='/login' component={LogIn} /> 
        <Route exact path='/main' component={Main}/>
      </Switch>
    </Router>
  </Provider>   
  )
}

export default App;
