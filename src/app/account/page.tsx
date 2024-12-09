export default function Account() {
    return (
      <>
        {/* Header Section */}
        <header className="contact h-32 bg-slate-100 flex items-center justify-center">
          <h1 className="text-2xl font-bold text-black">Account</h1>
        </header>
  
        {/* Main Content */}
        <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
          {/* Login Form */}
          <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-lg shadow-md lg:mr-8">
            <h2 className="text-center text-3xl font-extrabold text-gray-900">Log In</h2>
  
            <form className="mt-8 space-y-6" action="#" method="POST">
              <div className="space-y-4">
                <div>
                  <label htmlFor="login-email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    id="login-email"
                    name="email"
                    type="email"
                    required
                    className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#FBEBB5] focus:border-[#FBEBB5] sm:text-sm"
                    placeholder="Enter your email"
                  />
                </div>
  
                <div>
                  <label htmlFor="login-password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <input
                    id="login-password"
                    name="password"
                    type="password"
                    required
                    className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#FBEBB5] focus:border-[#FBEBB5] sm:text-sm"
                    placeholder="Enter your password"
                  />
                </div>
              </div>
  
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a href="#" className="font-medium text-black hover:text-black">
                    Lost your password?
                  </a>
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border rounded-md shadow-sm text-sm font-medium text-black border-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FBEBB5]"
                >
                  Log In
                </button>
              </div>
            </form>
  
            <p className="text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <a href="#" className="font-medium text-blsck hover:text-black">
                Register
              </a>
            </p>
          </div>
  
          {/* Register Form */}
          <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-lg shadow-md">
            <h2 className="text-center text-3xl font-extrabold text-gray-900">Register</h2>
  
            <form className="mt-8 space-y-6" action="#" method="POST">
              <div className="space-y-4">
                <div>
                  <label htmlFor="register-email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    id="register-email"
                    name="email"
                    type="email"
                    required
                    className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#FBEBB5] focus:border-[#FBEBB5] sm:text-sm"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
  
              <div className="text-sm text-gray-600">
                A link to set a new password will be sent to your email address.
                <br />
                Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.
              </div>
  
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border rounded-md shadow-sm text-sm font-medium text-black border-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FBEBB5]"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
  