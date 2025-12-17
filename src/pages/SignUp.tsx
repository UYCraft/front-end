import bg1 from '../assets/bg1.png';
import logo from "../assets/logodark.png";
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 min-h-screen font-poppins">
      
      {/* Left Side (Image & Quote) */}
      <div className="hidden md:block col-span-2 relative">
        <img 
          src={bg1} 
          alt="Background" 
          className="h-full w-full object-cover absolute inset-0" 
        />
        
        {/* Logo */}
        <img 
          src={logo} 
          alt="Logo" 
          className="absolute top-8 left-8 h-20 w-auto object-contain cursor-pointer" 
          onClick={() => navigate('/')}
        />
        
        {/* Glassmorphism Card */}
        <div 
          className="absolute bottom-16 right-10 w-64 p-4 rounded-xl bg-black/20 border border-white/10"
          style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
        >
          <img src="/Assets/teleskop.png" alt="Icon" className="h-8 w-8 rounded-lg mb-2" />
          <p className="text-white text-sm font-roboto font-normal leading-relaxed">
            Best Marketplace in Yogyakarta State University
          </p>
        </div>
      </div>

      {/* Right Side (Form) */}
      <div className="col-span-1 md:col-span-3 flex flex-col justify-center items-center bg-[#f0f2f5] min-h-screen py-10 px-4">
        
        <div className="w-full max-w-md flex flex-col items-center">
          <h2 className="text-black text-2xl font-semibold text-center">
            Get Started With UNYCraft
          </h2>

          <p className="text-gray-700 text-sm font-normal text-center mt-3 mb-6">
            Getting Started is Easy
          </p>

          <form className="w-full flex flex-col gap-4">
            {/* Inputs */}
            <div>
              <input
                className="block w-full h-14 px-4 text-sm text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all"
                placeholder="Full Name"
                id="username"
                type="text"
              />
            </div>

            <div>
              <input
                className="block w-full h-14 px-4 text-sm text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all"
                placeholder="Enter Email"
                id="email"
                type="email"
              />
            </div>

            <div>
              <input
                className="block w-full h-14 px-4 text-sm text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all"
                placeholder="Password"
                id="password"
                type="password"
              />
            </div>

            <div>
              <input
                className="block w-full h-14 px-4 text-sm text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all"
                placeholder="Confirm Password"
                id="confirmpassword"
                type="password"
              />
            </div>

            {/* Create Account Button */}
            <button 
              type="submit"
              className="w-full h-14 rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity mt-2"
              style={{ backgroundColor: '#20dc49' }}
            >
              <span className="text-gray-800 text-sm font-medium">Create Account</span>
            </button>
          </form>

          {/* Sign In Link */}
          <div className="flex flex-row items-center mt-4">
            <span className="text-black text-sm font-light mr-1">
              Have an account?
            </span>
            <a href="#" className="text-sm font-medium hover:underline" style={{ color: '#20dc49' }}>
              Sign in!
            </a>
          </div>

          {/* Or Continue With */}
          <div className="w-full flex items-center justify-between text-gray-400 text-xs mt-8 mb-6">
            <div className="h-px bg-gray-300 flex-1"></div>
            <span className="mx-4">Or Continue With</span>
            <div className="h-px bg-gray-300 flex-1"></div>
          </div>

          {/* Social Buttons */}
          <div className="grid grid-cols-2 gap-4 w-full">
            <button className="h-12 bg-white rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
              <img src="/Assets/logogoogel.png" alt="Google" className="h-5 w-5" />
              <span className="text-black text-sm font-light ml-2">Google</span>
            </button>
            <button className="h-12 bg-white rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
              <img src="/Assets/logofesbuk.png" alt="Facebook" className="h-5 w-5" />
              <span className="text-black text-sm font-light ml-2">Facebook</span>
            </button>
          </div>

          {/* Footer Terms */}
          <div className="mt-8 text-center px-4">
            <p className="text-black text-xs font-light leading-relaxed">
              By continuing, you indicate that you read and agreed to the <a href="#" className="text-green-500 hover:underline font-medium">Terms Of Use</a>
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default SignUp;