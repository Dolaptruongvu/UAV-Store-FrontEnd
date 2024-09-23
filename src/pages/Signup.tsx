import React from "react";
import AuthenticateNavBar from "../components/login/authenticateNavBar";
import SignUpForm from "../components/signup/signupForm";


const SignUp:React.FC = ()=>{
     return(<>
        <AuthenticateNavBar></AuthenticateNavBar>
        <SignUpForm></SignUpForm>
        </>

     )
}

export default SignUp