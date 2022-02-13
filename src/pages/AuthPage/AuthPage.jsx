import { useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

let f = 0;
export default function AuthPage({setUser, form}) {

    return(
        <main className="auth-page">
            <h1>AuthPage</h1>
            {
                form ?
                    <LoginForm setUser={setUser}/>
                :
                    <SignUpForm setUser={setUser}/>
            }
        </main>
    );
}