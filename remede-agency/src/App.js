import './App.css';
import Navbar from './component/Navbar';
import Homepage from './pages/Home';
import { Routes, Route, BrowserRouter} from "react-router-dom";
import Login from './pages/Login';
import Footer from './component/Footer';


function App() {
  return (
    <div className="App">
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/sign-in' element={<Login />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
  );
}

export default App;
