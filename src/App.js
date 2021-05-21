import React, { createContext } from 'react'
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
import Basicform from './components/Basicform/index';
import Loginform from './components/Loginform/index';
import Incdec from './components/Incdec/index';
import Inceffect from './components/Inceffect/index';
import CompA from './components/Contextexample/CompA';
import Changetitle from './components/Changetitle/index';

const Firstname = createContext();
const Lastname = createContext();

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
            <Route path = '/basicform' component={Basicform} />
            <Route path = '/loginform' component={Loginform} />
            <Route path = '/numberincdec' component={Incdec} />
            <Route path = '/inceffect' component={Inceffect} />

            <Route path = '/contextexample'>
              <Firstname.Provider value={"Samuel"}>
                <Lastname.Provider value={"Thapa"}>
                <CompA />
                </Lastname.Provider>
              </Firstname.Provider>
            </Route>

            <Route path = '/changetitle' component={Changetitle} />

        </Switch>
  </>
  )
}

export default App;
export {Firstname,Lastname};
