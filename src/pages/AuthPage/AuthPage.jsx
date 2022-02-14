import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

export default function AuthPage({setUser, form}) {

    return(
        <main className="auth-page">
            <h1 className="squareup">SquareUp</h1>
            {
                form ?
                    <LoginForm setUser={setUser}/>
                :
                    <SignUpForm setUser={setUser}/>
            }
        </main>
    );
}