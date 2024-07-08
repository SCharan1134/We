import { useState } from "react";
import Navbar from "../components/Navbar";
import { loginvector } from "../utils";

const LoginPage = () => {
  const [password, setPassword] = useState("");
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleLogin();
    }
  };

  const handleLogin = () => {
    // Handle login logic here, e.g., send password to server or validate
    console.log("Logging in with password:", password);
    // Reset password field after login
    setPassword("");
  };

  const handlePasswordFocus = () => {
    setIsPasswordFocused(true);
  };

  const handlePasswordBlur = () => {
    setIsPasswordFocused(false);
  };

  return (
    <section className="w-full nav-height bg-primary relative">
      <Navbar />
      <div className="w-full flex flex-col items-center justify-center">
        <img
          src={loginvector}
          alt="Login Illustration"
          className="w-full mb-8"
        />
        <div className="w-full max-w-md flex flex-col items-center gap-4 relative">
          <label
            htmlFor="password"
            className={`absolute transform ${
              isPasswordFocused
                ? "translate-x-1/2 -translate-y-full right-80 top-2"
                : "translate-x-1/2  right-80 top-2 opacity-0"
            } bg-primary font-medium px-2 rounded-lg transition-all duration-300`}
            style={{
              backgroundColor: isPasswordFocused ? "#fff" : "transparent",
            }}
          >
            Enter password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={handlePasswordFocus}
            onBlur={handlePasswordBlur}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-secondary focus:outline-none focus:border-secondary"
          />
        </div>
        <div className="mt-5">
          <p className="font-light font-inter">
            Don’t Have Password?{" "}
            <span className="font-bold hover:underline cursor-pointer">
              Request Now
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
