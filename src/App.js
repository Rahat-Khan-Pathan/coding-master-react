import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Courses from './components/Courses/Courses';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import UseFakeData from './hooks/FakeData';

function App() {
  const fakeData = UseFakeData();  // Getting courses data from fakeData 
  return (
    <div>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/courses">
            <Courses courses={fakeData}></Courses>
          </Route>
          <Route exact path="/cart">
            <Cart></Cart>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
