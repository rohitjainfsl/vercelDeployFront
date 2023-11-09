import { useState } from "react";
import axios from "axios";

function App() {
  const [registerData, setRegisterData] = useState({ email: "", password: "" });
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/register",
        registerData
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/login",
        loginData
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <>
      <form onSubmit={handleRegisterSubmit}>
        <h2>Register</h2>
        <label htmlFor="remail">Email:</label>
        <input
          type="email"
          id="remail"
          value={registerData.email}
          onChange={(e) =>
            setRegisterData({ ...registerData, email: e.target.value })
          }
          required
        />
        <label htmlFor="rpassword">Password:</label>
        <input
          type="password"
          id="rpassword"
          value={registerData.password}
          onChange={(e) =>
            setRegisterData({ ...registerData, password: e.target.value })
          }
          required
        />
        <button type="submit">Register</button>
      </form>

      <form onSubmit={handleLoginSubmit}>
        <h2>Login</h2>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={loginData.email}
          onChange={(e) =>
            setLoginData({ ...loginData, email: e.target.value })
          }
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={loginData.password}
          onChange={(e) =>
            setLoginData({ ...loginData, password: e.target.value })
          }
          required
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default App;
