import './App.css';
import NavBar from './component/NavBar';
import Home from './component/Home';
import Login from './component/Login';
import Registration from './component/Registration';
import Card from './component/Card';
import { Routes,Route }  from 'react-router-dom'


function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/card" element={<Card />} />
    </Routes>
    </>
  )
}

export default App;
