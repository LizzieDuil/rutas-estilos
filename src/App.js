import './App.css';
import {Routes, Route} from 'react-router-dom';
import Loyout from "./pages/Layout";
import About from "./pages/About";
import Home from './pages/Home';
import Default from './pages/Default';
import Dashboard from './pages/Dashboard';
import Logouts from './pages/Logouts';
import boton from './css/Boton.css';


function App() {
  return (
    <div>
    
      <h1>Routes</h1>
      <Routes>

        <Route path="/" element={<Loyout/>}>
        <Route path="about" element={<About/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path='dashboard' element={<Dashboard/>}/>
        <Route path='*' element={<Default/>}/>
        <Route path='logouts' element={<Logouts/>}/>
          
        </Route>
      </Routes>
     
   
    </div>
  );
}
<div className='Boton.css'>

</div>
export default App;
