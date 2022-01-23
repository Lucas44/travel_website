import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' 
import Home from './pages/Home';
import Europe from './pages/Europe';
import Africa from './pages/Africa';
import Asia from './pages/Asia';
import NorthAmerica from './pages/North%20America';
import Oceania from './pages/Oceania';
import SouthAmerica from './pages/South%20America';
import Error from './pages/Error';

function App() {
  return <Router>
    <Routes>
      <Route path="/" element={<Home />}/> 
      <Route path="/Europe" element={<Europe />}/> 
      <Route path="/Africa" element={<Africa />}/> 
      <Route path="/Asia" element={<Asia />}/> 
      <Route path="/North%20America" element={<NorthAmerica />}/>
      <Route path="/Oceania" element={<Oceania />}/> 
      <Route path="/South%20America" element={<SouthAmerica />}/> 
      <Route path="*" element={<Error />}/> 
    </Routes>
    </Router>;}

export default App;
