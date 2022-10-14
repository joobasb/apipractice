import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Exchange from './Pages/Exchange';
import Footer from './Components/Footer';
import Movies from './Components/Movies';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar />
    <div className='container'>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="exchange" element={<Exchange/>} />
        <Route path="movies" element={<Movies />} />
      </Routes>
    </div>
    <Footer />
    </>
  );
}

export default App;
