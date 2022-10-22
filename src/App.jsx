import './App.scss';

import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Base from './component/layout/Base';
import Home from './pages/Home';
import Technology from './pages/Technology';
import Community from './pages/Community';
import About from './pages/About';
import Block from './pages/Block';
import Bold from './pages/Bold';
import Contact from './pages/Contact';



function App() {
  return (
    Aos.init({duration:3000}),

   <>
   <BrowserRouter>
   <Base>
   <Routes>
    <Route path='/' index element ={ <Home/>} />
    <Route path='/technology' element ={ <Technology/>} />
    <Route path='/community' element ={ <Community/>} />
    <Route path='/about' element={<About/>}/>
    <Route path='/blog' element={<Block/>}/>
    <Route path='/build' element={<Bold/>}/>
    <Route path='/contact' element={<Contact/>}/>





   </Routes>
   
   </Base>
   
   </BrowserRouter>
   
   </>
  );
}

export default App;
