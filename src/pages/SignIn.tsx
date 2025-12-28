import { useState } from "react"; // Tambah useState
import axios from "axios";        // Tambah axios
import { useNavigate } from 'react-router-dom';
import loginImage from "../assets/img-login.jpg";
import logo from "../assets/light_logo.png";
import fesnuk from "../assets/fesnuk.png";
import gugel from "../assets/gugel.png";

const SignIn = () => {
  const navigate = useNavigate();

  // --- 1. STATE MANAGEMENT ---
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Untuk pesan error
  const [loading, setLoading] = useState(false); // Untuk loading button

  // --- 2. FUNGSI LOGIN ---
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login", {
        email: email,
        password: password,
      });

      // Simpan Token
      localStorage.setItem("token", response.data.access_token);
      
      // Simpan User Info (Opsional, buat nampilin nama di dashboard)
      localStorage.setItem("user", JSON.stringify(response.data.data));

      // Redirect ke Dashboard
      navigate("/dashboard");

    } catch (err: any) {
      // Handle Error dari Backend
      if (err.response && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("Gagal terhubung ke server.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 h-screen w-full overflow-hidden">
      
      {/* Content Left */}
      <div className="col-span-3 p-10 flex flex-col justify-center relative bg-white">
        <div className="absolute top-10 left-10 w-40">
          <img
            src={logo}
            alt="Logo"
            className="w-full object-contain cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => navigate('/')}
          />
        </div>

        <div className="container mx-auto flex justify-center items-center mt-16 md:mt-0">
          <div className="w-full max-w-md shrink-0">
            <div className="text-black font-semibold text-4xl leading-tight text-center">
              Welcome Back
            </div>
            <div className="text-gray-600 text-base font-normal leading-7 mt-2 text-center">
              Login into your account
            </div>

            {/* ERROR MESSAGE ALERT */}
            {error && (
                <div className="mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-sm text-center">
                    {error}
                </div>
            )}

            {/* FORM LOGIN */}
            <form className="mt-8" onSubmit={handleLogin}>
              <div className="email">
                <input
                  type="email"
                  className="w-full h-12 px-4 rounded-md border border-gray-300 focus:outline-none focus:border-green-500 transition-colors"
                  placeholder="Email"
                  value={email} // Binding Data
                  onChange={(e) => setEmail(e.target.value)} // Update Data
                  required
                />
              </div>
              <div className="pass mt-6">
                <input
                  type="password"
                  className="w-full h-12 px-4 rounded-md border border-gray-300 focus:outline-none focus:border-green-500 transition-colors"
                  placeholder="Password"
                  value={password} // Binding Data
                  onChange={(e) => setPassword(e.target.value)} // Update Data
                  required
                />
              </div>

              {/* Remember Me and Recover Pass */}
              <div className="flex items-center justify-between mt-6">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    type="checkbox"
                    className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900 cursor-pointer"
                  >
                    Remember Me
                  </label>
                </div>
                <div>
                  <a
                    href="#"
                    className="text-sm text-red-500 hover:text-red-700 font-medium"
                  >
                    Recover Password
                  </a>
                </div>
              </div>

              {/* Login Button */}
              <div className="mt-8">
                <button
                  type="submit"
                  disabled={loading} // Disable saat loading
                  className={`w-full h-14 flex items-center justify-center rounded-md text-white transition-all font-medium cursor-pointer ${
                      loading ? "bg-gray-500 cursor-not-allowed" : "bg-gray-900 hover:bg-gray-800"
                  }`}
                >
                  {loading ? "Logging in..." : "Log in"}
                </button>
              </div>
            </form>

            {/* Continue With */}
            <div className="flex items-center justify-center text-gray-400 text-xs mt-8">
              <div className="border-b border-gray-300 flex-1"></div>
              <div className="mx-4">Or Continue With</div>
              <div className="border-b border-gray-300 flex-1"></div>
            </div>

            {/* Google and Facebook */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <button className="flex items-center justify-center h-12 rounded-md border border-gray-300 hover:border-gray-400 bg-white hover:bg-gray-50 transition-all">
                <img
                  src={gugel}
                  alt="Google"
                  className="w-5 h-5"
                />
                <span className="ml-2 text-black text-sm font-medium">
                  Google
                </span>
              </button>

              <button className="flex items-center justify-center h-12 rounded-md border border-gray-300 hover:border-blue-500 bg-white hover:bg-blue-50 transition-all">
                <img
                  src={fesnuk}
                  alt="Facebook"
                  className="w-5 h-5"
                />
                <span className="ml-2 text-black text-sm font-medium">
                  Facebook
                </span>
              </button>
            </div>

            {/* to Sign-Up */}
            <div className="mt-8 text-center flex justify-center items-center">
              <span className="text-gray-600 text-sm font-light mr-1">
                Don't have an account?
              </span>
              <a
                href="/signup"
                className="text-green-600 hover:text-green-700 text-sm font-medium hover:underline"
              >
                Sign-Up
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Content Right (Image Overlay) */}
      <div className="hidden md:block col-span-2 relative bg-gray-100">
        <img
          src={loginImage}
          alt="Crafts"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Glassmorphism Card */}
        <div
          className="absolute bottom-10 left-10 right-10 rounded-xl p-6 border border-white/20 shadow-lg"
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
          }}
        >
          <div className="inline-flex items-center px-3 py-1 rounded bg-green-500 mb-4">
            <span className="text-white font-medium text-xs">
              Best Craft Marketplace in UNY
            </span>
          </div>
          <p className="text-white font-normal text-sm leading-relaxed drop-shadow-md">
            UNY Craft Market, Yogyakarta State's Universities number 1 craft
            marketplace provide craftsmen and craft enjoyers all over Yogyakarta
            to buy, sell, and enjoy arts and crafts ranging from traditional,
            modern, and mixed crafts from Indonesia.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;