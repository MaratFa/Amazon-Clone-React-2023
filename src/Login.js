import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";



export default function Login () {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = e => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password).then(auth => {
      navigate('/')
  })
  .catch(error => alert(error.message));
}
debugger

  const register = e => {
    e.preventDefault();
    
    createUserWithEmailAndPassword(auth,email, password)
      .then(auth => {
        // It successfully created a new user with email and password
        console.log(auth);
        if (auth) {
          navigate('/')
        }
      })
      .catch(error => alert(error.message));

    // Do some fancy firebase register
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
        />
      </Link>

      <div className="login__container">
        <h1>Sign in</h1>
        <form onSubmit={Login}>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign in
          </button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Condition of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Internet-Based Ads Notice.
        </p>
        <button onClick={register} className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}