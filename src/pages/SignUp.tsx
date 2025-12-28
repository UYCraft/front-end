import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BuildingStorefrontIcon } from "@heroicons/react/24/outline";
import bg1 from "../assets/bg1.png";
import logo from "../assets/logodark.png";
import google from "../assets/gugel.png";
import facebook from "../assets/fesnuk.png";

const SignUp = () => {
  const navigate = useNavigate();

  // --- 1. STATE ---
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // --- 2. FUNGSI REGISTER ---
  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    // Validasi Password Match Client Side
    if (password !== confirmPassword) {
        setError("Password dan Konfirmasi Password tidak sama!");
        return;
    }

    setLoading(true);

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/register", {
        name: name,
        email: email,
        password: password,
      });

      // Sukses Register -> Langsung Login otomatis
      localStorage.setItem("token", response.data.access_token);
      localStorage.setItem("user", JSON.stringify(response.data.data));

      // Redirect ke Dashboard
      navigate("/dashboard");

    } catch (err: any) {
      if (err.response && err.response.data.email) {
          setError(err.response.data.email[0]); // Email sudah ada
      } else if (err.response && err.response.data.message) {
          setError(err.response.data.message);
      } else {
          setError("Terjadi kesalahan saat register.");
      }
    } finally {
      setLoading(false);
    }
  };

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
          onClick={() => navigate("/")}
        />

        {/* Glassmorphism Card */}
        <div
          className="absolute bottom-16 right-10 w-64 p-4 rounded-xl bg-black/20 border border-white/10"
          style={{
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          <BuildingStorefrontIcon className="w-8 h-8 text-white mb-2" />
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

           {/* ERROR ALERT */}
           {error && (
                <div className="mb-4 w-full bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded text-sm text-center">
                    {error}
                </div>
            )}

          <form className="w-full flex flex-col gap-4" onSubmit={handleRegister}>
            {/* Inputs */}
            <div>
              <input
                className="block w-full h-14 px-4 text-sm text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all"
                placeholder="Full Name"
                id="username"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div>
              <input
                className="block w-full h-14 px-4 text-sm text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all"
                placeholder="Enter Email"
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <input
                className="block w-full h-14 px-4 text-sm text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all"
                placeholder="Password"
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div>
              <input
                className="block w-full h-14 px-4 text-sm text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all"
                placeholder="Confirm Password"
                id="confirmpassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            {/* Create Account Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full h-14 rounded-lg flex items-center justify-center transition-opacity mt-2 ${
                  loading ? "bg-green-300 cursor-not-allowed" : "hover:opacity-90"
              }`}
              style={{ backgroundColor: loading ? undefined : "#20dc49" }}
            >
              <span className="text-gray-800 text-sm font-medium">
                {loading ? "Creating Account..." : "Create Account"}
              </span>
            </button>
          </form>

          {/* Sign In Link */}
          <div className="flex flex-row items-center mt-4">
            <span className="text-black text-sm font-light mr-1">
              Have an account?
            </span>
            <a
              href="/signin"
              className="text-sm font-medium hover:underline"
              style={{ color: "#20dc49" }}
            >
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
              <img src={google} alt="Google" className="h-5 w-5" />
              <span className="text-black text-sm font-light ml-2">Google</span>
            </button>
            <button className="h-12 bg-white rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
              <img src={facebook} alt="Facebook" className="h-5 w-5" />
              <span className="text-black text-sm font-light ml-2">
                Facebook
              </span>
            </button>
          </div>

          {/* Footer Terms */}
          <div className="mt-8 text-center px-4">
            <p className="text-black text-xs font-light leading-relaxed">
              By continuing, you indicate that you read and agreed to the{" "}
              <a
                href="#"
                className="text-green-500 hover:underline font-medium"
              >
                Terms Of Use
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;