import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import SignIn from './pages/SignIn'; 
import SignUp from './pages/SignUp'; 
import Bottombar from './components/Bottombar';

function App() {
  return (
    // PENTING: <Router> harus menjadi pembungkus TERLUAR
    // Agar Navbar (yang ada di dalamnya) bisa menggunakan useNavigate
    <Router>
      <div className="min-h-screen flex flex-col font-sans">
        
        {/* Navbar sekarang aman karena ada di dalam Router */}
        <Navbar />
        
        <main className="grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </main>

        <Bottombar />
        
      </div>
    </Router>
  );
}

export default App;