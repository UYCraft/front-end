import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import SignIn from './pages/SignIn'; 
import SignUp from './pages/SignUp'; 
import Bottombar from './components/Bottombar';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans">

        <Navbar />
        
        <main className="grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            
            <Route element={<PrivateRoute />}>
               <Route path="/dashboard" element={<Dashboard />} />
               {/* Halaman lain yang butuh login taruh sini */}
            </Route>

          </Routes> 
        </main>

        <Bottombar />
        
      </div>
    </Router>
  );
}

export default App;