import React from 'react'
import Login from '../Login'
import Home from '../Home'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

export default () => (

    <Router>
        <div>
            <Route exact path="/" component={Login} />
            <Route path="/home" component={Home} />
        </div>
    </Router>

)