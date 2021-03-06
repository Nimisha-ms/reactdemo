import React, { createContext } from 'react';
import {Route, Switch} from "react-router-dom";
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
import Pokemon from './components/Pokemon/ComA';
import Navbar from './components/Navbar/index';
import NavbarContact from './components/Navbar/Contact';
import NavbarAbout from './components/Navbar/About';
import ProductListing from './components/ProductListing';
import ProductDetails from './components/ProductDetails';
import Header from './components/Header';
import ContactList from './components/Contact/ContactList';
import CheckValidation from './components/CheckValidation/Form';
import WeatherApp from './components/WeatherApp/index';


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
            <Route path = '/pokemon' component={Pokemon} />

            {/* <Route path = '/navbar' component={Navbar} /> */}
            {/* <Route path = '/navbar/contact' component={Contact} /> */}

            {/*Nested routes:*/}
            <Route
              path="/navbar"
              render={({ match: { url } }) => (
                <>
                  <Route path={`${url}/`} component={Navbar} exact />
                  <Route path={`${url}/contact`} component={NavbarContact} />        
                  <Route path={`${url}/about`} component={NavbarAbout} />        
                </>
              )}
            />

        <Route exact path="/reduxdemo" component={ProductListing} />
        <Route exact path="/product/:productId" exact component={ProductDetails} />

        <Route path = '/contactapp' component={ContactList} />
        <Route path = '/chkvalid' component={CheckValidation} />
        <Route path = '/weatherapp' component={WeatherApp} />
        </Switch>
  </>
  )
}


// const Navbar = (props) => {
//   //const { path } = this.props.match;
//   console.log(props);

//   return(
//     <Switch>
//       <Route path='/navbar' exact={true} component={Navbar} />
//     </Switch>
//   );
// };


export default App;
export {Firstname,Lastname};
