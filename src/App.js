import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Exchange from './Pages/Exchange';
import Footer from './Components/Footer';
import Moviepage from './Pages/Moviepage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar />
    <div className='container'>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="exchange" element={<Exchange/>} />
        <Route path="moviepage" element={<Moviepage />} />
      </Routes>
    </div>
    <Footer />
    </>
  );
}

export default App;
