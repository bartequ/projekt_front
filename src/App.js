import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './Components/Navbar'
import Login from './Components/Login'
import Register from './Components/Register'
import Questions from "./Components/Questions";
import Landing from "./Components/Landing";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Navbar />
                    <Route exact path="/" component={Landing} />
                    <div className="container">
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/questions" component={Questions} />
                    </div>
                </div>
            </Router>
        )
    }
}

export default App