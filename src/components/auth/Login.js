import React, { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const { email, password } = user;

  //this line takes data entered by the user and stores them within state
  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    console.log("Login Submit");
  };

  return (
    <div>
      <h1>Account Login</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="email">Email Address </label>
          <input
            required
            type="email"
            name="email"
            value={email}
            onChange={onChange}
          />
        </div>

        <div>
          <label htmlFor="password">Password </label>
          <input
            required
            type="password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </div>

        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
