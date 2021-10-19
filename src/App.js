import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Authprovider from './Context/Authprovider';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Contact from './Pages/Contact/Contact';
import Doctordetails from './Pages/Doctors/Doctordetails/Doctordetails';
import Doctors from './Pages/Doctors/Doctors';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import Notfound from './Pages/Notfound/Notfound';
import Servicedetails from './Pages/Services/Servicedetails/Servicedetails';
import Services from './Pages/Services/Services';
import Signin from './Pages/Signin/Signin';
import Signup from './Pages/Signup/Signup';
import Privateroute from './Privateroute/Privateroute';

function App() {
  return (
    <>
      <Authprovider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Privateroute path="/service/:serviceId">
              <Servicedetails></Servicedetails>
            </Privateroute>
            <Privateroute path="/doctor/:serviceId">
              <Doctordetails></Doctordetails>
            </Privateroute>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/signin">
              <Signin></Signin>
            </Route>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Privateroute path="/appointment">
              <Appointment></Appointment>
            </Privateroute>
            <Route path="/doctors">
              <Doctors></Doctors>
            </Route>
            <Route exact path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </Authprovider>
    </>
  );
}

export default App;
