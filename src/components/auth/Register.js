import React, { useState } from "react";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const { name, email, password, password2 } = user;

  //this line takes data entered by the user and stores them within state
  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    console.log("Register Submit");
  };

  return (
    <div>
      <h1>Account Register</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">Name </label>
          <input type="text" name="name" value={name} onChange={onChange} />
        </div>

        <div>
          <label htmlFor="email">Email Address </label>
          <input type="email" name="email" value={email} onChange={onChange} />
        </div>

        <div>
          <label htmlFor="password">Password </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </div>

        <div>
          <label htmlFor="password2">Confirm Password </label>
          <input
            type="password2"
            name="password2"
            value={password2}
            onChange={onChange}
          />
        </div>

        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
