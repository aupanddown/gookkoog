import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './pages/Home';
import Navibar from './pages/Navibar';
import Onthemenu from './pages/Onthemenu';
import Favorite from './pages/Favorite';
import Cart from './pages/Cart';
import Contactus from './pages/Contactus';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Ingredients from './pages/Ingredients';
import Cookingtips from './pages/Cookingtips';
import Specialprogram from './pages/Specialprogram';

function App() {
  return (
  <BrowserRouter>
    <div className="App">  
    <Navibar/>
    </div>
    <Route path="/" component={Home} exact />
    <Route path="/onthemenu" component={Onthemenu} />
    <Route path="/favorite" component={Favorite} />
    <Route path="/cart" component={Cart} />
    <Route path="/contactus" component={Contactus} />
    <Route path="/signup" component={Signup} />
    <Route path="/login" component={Login} />
    <Route path="/ingredients" component={Ingredients} />
    <Route path="/cookingtips" component={Cookingtips} />
    <Route path="/specialprogram" component={Specialprogram} />
  </BrowserRouter>
    
  );
}

export default App;
