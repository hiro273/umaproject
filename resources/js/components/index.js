import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './Home/Navbar'
import Helper from './Home/Helper'
import App from './Home/App'
import Uma from './Home/Uma'
import Article from './Home/Article'

function Index() {
  return (
  <Router>
      <div>
          <NavBar />
          <Switch>
              <Route exact path="/" component={App} />
              <Route path="/uma" component={Uma} />
              <Route path="/helper" component={Helper} />
              <Route path="/article" component={Article} />
          </Switch>
      </div>
  </Router>
  )
}

if (document.getElementById('root')) {
    ReactDOM.render(<Index />, document.getElementById('root'));
}