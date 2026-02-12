import { useState } from "react";
import "./Login.css";

function Login() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">
          {isLogin ? "Login" : "Sign Up"}
        </h2>

        <form className="auth-form">
          {!isLogin && (
            <input
              type="text"
              placeholder="Username"
              className="auth-input"
            />
          )}

          <input
            type="email"
            placeholder="Email"
            className="auth-input"
          />

          <input
            type="password"
            placeholder="Password"
            className="auth-input"
          />

          <button type="button" className="auth-button">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <p className="auth-toggle">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? " Sign Up" : " Login"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
