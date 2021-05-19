import React from 'react'
import {Route, Switch} from "react-router-dom"
import Allpages from './components/Allpages';
import List from './List';
import Currdate from './Currdate';
import Greetings from './Greetings';

const App = () => {
  return (
    <>
    {/*<Greetings />*/}
    {/*<Currdate />*/}
    {/* <List /> */}

        <Switch>
            <Route path = '/' exact component={Allpages} />
            <Route path = '/netflix' component={List} />
            <Route path = '/greetings' component={Greetings} />
            <Route path = '/currentdate' component={Currdate} />
        </Switch>
  </>
  )
}

export default App;
