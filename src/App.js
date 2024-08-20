
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';

function App() {
  return (
 <>
 <Navbar></Navbar>
 <Routes>
  <Route path='' element={<Home></Home>}></Route>
 </Routes>
 
 
 </>
  );
}

export default App;
