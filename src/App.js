import React from 'react'
import {Route, Switch} from "react-router-dom"
import Allpages from './components/Allpages';
import Netflix from './components/Netflix/List';
import Currdate from './Currdate';
import Greetings from './Greetings';
import Basichooks from './components/Basichooks/index';
import Slotgame from './components/Slotgame/index';
import Hookstimer from './components/Hookstimer/index';
import Digitalclock from './components/Digitalclock/index';
import Allevents from './components/Allevents/index';


const App = () => {
  return (
    <>
        <Switch>
            <Route path = '/' exact component={Allpages} />
            <Route path = '/netflix' component={Netflix} />
            <Route path = '/greetings' component={Greetings} />
            <Route path = '/currentdate' component={Currdate} />
            <Route path = '/basichooks' component={Basichooks} />
            <Route path = '/slotgame' component={Slotgame} />
            <Route path = '/hookstimer' component={Hookstimer} />
            <Route path = '/allevents' component={Allevents} />
        </Switch>
  </>
  )
}

export default App;
