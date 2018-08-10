/*import ReactDOM from 'react-dom';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore , applyMiddleware} from 'redux';

import App from './Components/App';
import { Loginform } from './Components/Login';
import reducers from './reducers';
import MovieList from './Components/MoviesList'

const createdStore =createStore(reducers);


ReactDOM.render(
   <Provider store={createdStore}><Router><Switch>
       <Route exact path="/" component={App} />
       <Route exact path="/login" component={Loginform} />
       <Route exact path="/movie" component ={MovieList} />

   </Switch></Router></Provider>, 
    document.getElementById('react-container')
)
*/

import ReactDOM from 'react-dom';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore , compose} from 'redux';

import App from './Components/App';
import { Loginform } from './Components/Login';
import reducers from './reducers';
import MoviesList from './Components/MoviesList';
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers();
const createdStore =createStore(reducers , enhancer);


ReactDOM.render(
   <Provider store={createdStore}><Router><Switch>
       <Route exact path="/" component={App} />
       <Route exact path="/login" component={Loginform} />
       <Route exact path="/movieslist" component ={MoviesList} />

   </Switch></Router></Provider>, 
    document.getElementById('react-container')
)

