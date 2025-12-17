import loginImage from "../assets/img-login.jpg";
import logo from "../assets/light_logo.png";


const SignIn = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 min-h-screen">
      
      {/* Content Left */}
      <div className="col-span-3 p-10 flex flex-col justify-center relative bg-white">
        <div className="absolute top-10 left-10 w-40">
          {/* Pastikan path gambar benar (gunakan / bukan \) */}
          <img
            src={logo}
            alt="Logo"
            className="w-full object-contain"
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

            <form className="mt-8">
              <div className="email">
                <input
                  type="email"
                  className="w-full h-12 px-4 rounded-md border border-gray-300 focus:outline-none focus:border-green-500 transition-colors"
                  placeholder="Email"
                />
              </div>
              <div className="pass mt-6">
                <input
                  type="password"
                  className="w-full h-12 px-4 rounded-md border border-gray-300 focus:outline-none focus:border-green-500 transition-colors"
                  placeholder="Password"
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
                  className="w-full h-14 flex items-center justify-center rounded-md bg-gray-900 hover:bg-gray-800 text-white transition-all font-medium cursor-pointer"
                >
                  Log in
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
                  src="/images/google_logo.svg"
                  alt="Google"
                  className="w-5 h-5"
                />
                <span className="ml-2 text-black text-sm font-medium">
                  Google
                </span>
              </button>

              <button className="flex items-center justify-center h-12 rounded-md border border-gray-300 hover:border-blue-500 bg-white hover:bg-blue-50 transition-all">
                <img
                  src="/images/facebook_logo.svg"
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
                href="#"
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
