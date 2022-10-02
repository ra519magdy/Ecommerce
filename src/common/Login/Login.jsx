import React from 'react'
import "./Login.css"


const Login = () => {
  return (
    <>

<div class="L-container">
      <form class="form-1">
        <h1>Login</h1>
        <label for="email">Email</label>
        <input type="email" name="email" id="email" required />
        <label for="password">Password</label>
        <input type="password" name="password" id="password" required />
        <span>Forgot Password</span>
        <button>Login</button>


        <p>Or SignUp Using</p>
        <div class="icons">
          <a href="https://www.facebook.com/" target="blank"
            ><i class="fab fa-facebook-f"></i
          ></a>
          <a href="https://twitter.com/" target="blank"
            ><i class="fab fa-twitter"></i
          ></a>
          <a href="https://mail.google.com/" target="blank"
            ><i class="fab fa-google"></i
          ></a>
        </div>
      </form>
    </div>


        





























    </>
  )
}

export default Login
