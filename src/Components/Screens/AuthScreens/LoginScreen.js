import React from 'react'
import './Css_Auth.css'
const LoginScreen = () => {
  return (
    <>
    <div className="LazyContainer">
       <div className="box">
		<form autocomplete="off">
			<h2>Sign in</h2>
			<div className="inputBox">
				<input type="text" required="required"/>
				<span>Userame</span>
				<i></i>
			</div>
			<div className="inputBox">
				<input type="password" required="required"/>
				<span>Password</span>
				<i></i>
			</div>
			<div className="links">
				<a href="#">Forgot Password ?</a>
				<a href="#">Signup</a>
			</div>
			<input type="submit" value="Login"/>
		</form>
	   </div>
    </div>
    </>
  )
}

export default LoginScreen