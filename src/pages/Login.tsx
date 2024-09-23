import React from "react";
import AuthenticateNavBar from "../components/login/authenticateNavBar";
import LoginForm from "../components/login/loginForm";

const Login:React.FC = ()=>{

    return(<>
    <AuthenticateNavBar></AuthenticateNavBar>
    <LoginForm></LoginForm>
    </>)

}

export default Login