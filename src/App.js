import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Bayraktar from './components/Bayraktar';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<div className='mainflags'><Home /></div>} />
        <Route path={`/flag/:cca2`} element={<Bayraktar/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
