import { BrowserRouter,  Routes, Route } from 'react-router-dom';
import Men from './pages/Men';
import Navbar from './components/NavBar';
import Women from './pages/Women';
import House from './pages/House';

function App() {
  return (
    <BrowserRouter> 
      <Navbar/>
      <Routes>
        <Route path="/" element={<House/>} />
        <Route path="/Men" element={<Men/>} />
        <Route path="/Women" element={<Women/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
