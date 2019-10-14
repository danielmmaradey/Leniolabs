// Module Dependencies
import React from "react";
import { HashRouter as Router, Route,Switch} from "react-router-dom";

// Module Components
import Login from './pages/Login/Login';
import Page404 from './pages/404/Page404';

// Module Redux
import { Provider } from "react-redux";
import store from './storage/store';

// Module Layout
import DefaultLayout from './layout/DefaultLayout/DefaultLayout'

// Module main Component
const App = () => {
  return(
    <Provider store={store}>
      <Router>
        <div className="App">
          <Router>
            <Switch>
              <Route exact path="/login" name="Login" component={Login} />
              <Route exact path="/404" name="404" component={Page404} />
              <Route path="/" name="Layout" component={DefaultLayout} />
            </Switch>
          </Router>
        </div>
    </Router>
    </Provider>

  )
}

export default App;


