import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import Principal from './pages/Principal';
import PPT from './pages/PPT';
import CHISTES from './pages/CHISTES';
import TOTITO from './pages/TOTITO';
import BUSCAMINAS from './pages/BUSCAMINAS';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Principal/>}/>
        <Route path='/ppt' element={<PPT/>}/>
        <Route path='/totito' element={<TOTITO/>}/>
        <Route path='/buscaminas' element={<BUSCAMINAS/>}/>
        <Route path='/chistes' element={<CHISTES/>}/>
        <Route path="*" element={<Navigate to="/" replace={true} />} exact={true} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
