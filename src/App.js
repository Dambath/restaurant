import './App.css';
import SignUp from './containers/signUp/index'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from './store'

const store = configureStore();

function App() {
  return( 
  <Provider store={store}> 
    <Router>
      <Switch>
        <Route exact path='/signUp' component={SignUp}/>
      </Switch>
    </Router>
  </Provider>   
  )
}

export default App;
