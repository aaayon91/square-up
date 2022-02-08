import { useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

let f = 0;
export default function AuthPage({setUser, formDisplayed, form}) {
    // const [form, setForm] = useState(1);

    // function formDisplayed(evt) {
    //     f = f + 1;
    //     if (f % 2 === 0) {
    //         setForm(1);
    //     } else {
    //         setForm(null);
    //     }
    // }
    // console.log(f)
    // console.log(form)
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

// formDisplayed={formDisplayed}