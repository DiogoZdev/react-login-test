import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/home/Home';
import { Main } from './pages/main/Main';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/main' element={<Main/>}></Route>
    </Routes>
  );
}

export default App;
