
import './styles/App.scss';

import Navbar from './components/Navbar.jsx'

import Footer from './components/Footer.jsx'

import Home from './pages/Home.jsx'
import Corso from './pages/Corso.jsx'
import Soldi from './pages/Soldi.jsx'
import Soldi2 from './pages/Soldi2.jsx'

import skull from './skull-skullgif.gif'

import emoji from './emoji-disintergrating.gif'

import pic from "C:/Users/Studente/Documents/Classe4f/portfolio-4fti/src/download.jpg";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';



const App = () => {
  return(
    <Router>
    <div className='App'>
        <img src={pic} alt="foto" height={310} width={1920}></img>
        
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/corso' element={<Corso />} />
          <Route exact path='/soldi' element={<Soldi />} />
          <Route exact path='/soldi2' element={<Soldi2 />} />
        </Routes>
        <img src={skull} alt="gif" hight={140} width={140}></img>
        
        <Footer />

        <img src={emoji} alt="gif2" hight={300} width={300}></img>
    </div>
    </Router>
  );
}



export default App;
