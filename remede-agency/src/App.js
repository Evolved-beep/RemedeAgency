import './App.css';
import Navbar from './component/Navbar';
import Homepage from './pages/Home';
import { Routes, Route} from "react-router-dom";
import Login from './pages/Login';
import Footer from './component/Footer';
import Profile from './pages/Profile';


function App() {
  return (
    <div className="App">
        <Navbar />
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/sign-in' element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        <Footer />
      </div>
  );
}

export default App;
