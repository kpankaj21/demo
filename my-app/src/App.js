import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Register from './components/Register';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import Login from './components/Login';
import View from './components/View';

function App() {
  return (
   <Router>
     <Navbar/>

    <switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/register" component={Register}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/view/:id" component={View} />
    </switch>

   </Router>
  );
}

export default App;
