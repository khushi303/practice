import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage';
import Contactpage from './pages/Contactpage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' exact element={<Homepage />}></Route>
        <Route path='/Aboutpage' exact element={<Aboutpage />}></Route>
        <Route path='/Contactpage' exact element={<Contactpage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
