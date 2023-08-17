import './App.css';
import Header from './Components/Header'
import Home from './Pages/Home'

import Coins from './Pages/Coins'
import {


  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";











function App() {






  return (

    <div >
    <Router>



    
    

    <Header/>


    

    <Routes>


    <Route exact path='/' element = {<Home/> } />
    <Route exact path='/coins/:id' element = {<Coins/> } />

    </Routes>



    </Router>

      
    </div>
  );
}

export default App;
