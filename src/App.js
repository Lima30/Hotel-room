// import logo from './logo.svg';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Services from './components/Services/Services';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './context/AuthProvider';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Details from './components/Details/Details';
// import PrivateRoute from './components/PrivateRoute/PrivateRoute';
// import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div >
      <AuthProvider>
        <Router>
          <Header></Header>

          <Switch>
            <Route path="/Home">
              <Home></Home>
            </Route>
            <Route path="/About">
              <About></About>
            </Route>
            <Route path="/Services">
              <Services></Services>
            </Route>
            <Route path="/Details/:id">
              <Details></Details>
            </Route>

            <Route path="/Contact">
              <Contact></Contact>
            </Route>

            <Route path="/Login">
              <Login></Login>
            </Route>

            <Route path="/Register">
              <Register></Register>
            </Route>

            <PrivateRoute path="/Placeorder">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>


            <Route exact path="/">
              <Home></Home>
            </Route>
            {/* <Route path="*">
              <NotFound></NotFound>
            </Route> */}

          </Switch>

        </Router>
      </AuthProvider>



      <div>
        <Footer></Footer>
      </div>

    </div>

  );
}

export default App;
