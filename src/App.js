import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Contact from './Pages/Contact/Contact';
import Doctors from './Pages/Doctors/Doctors';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import Servicedetails from './Pages/Services/Servicedetails/Servicedetails';
import Services from './Pages/Services/Services';
import Signin from './Pages/Signin/Signin';
import Signup from './Pages/Signup/Signup';

function App() {
  return (
    <>
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
          <Route path="/service/:serviceId">
            <Servicedetails></Servicedetails>
          </Route>
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
          <Route path="/appointment">
            <Appointment></Appointment>
          </Route>
          <Route path="/doctors">
            <Doctors></Doctors>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
