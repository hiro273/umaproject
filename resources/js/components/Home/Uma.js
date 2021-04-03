import React from 'react'
import UmaArticle from './UmaArticle'
import NavBar from '../umaArticle/NavBar'
import Teio from '../umaArticle/Teio'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Uma = () => {
  return (
    <Router>
        <div>
            <NavBar />
            <UmaArticle/>
            <Switch>
                <Route path="/uma/teio" component={Teio} />
            </Switch>
        </div>
    </Router>
    )
} 

export default Uma
