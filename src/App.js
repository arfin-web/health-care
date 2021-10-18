import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import Services from './Pages/Services/Services';

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
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
