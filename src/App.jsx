import React from 'react'
import { BrowserRouter as Router,
    Switch,
    Route,
     } from 'react-router-dom'
import WelcomePages from './pages/WelcomePages'
import MainPage from './pages/MainPage'
import CityPage from './pages/CityPage'
import NotFoundPage from './pages/NotFoundPage'

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <WelcomePages />
                </Route>
                <Route path="/main">
                    <MainPage />
                </Route>
                <Route path="/city/:countryCode/:city">
                    <CityPage /> 
                </Route>
                <Route>
                    <NotFoundPage />
                </Route>
            </Switch>
        </Router>
            
    )
}

export default App
