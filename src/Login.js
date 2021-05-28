import React from "react";
import { Button } from "@material-ui/core";
import "./Login.css";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionType } from "./Reducer";

function Login() {
   const [{}, dispatch] = useStateValue();


    const signIn = ()  => {
        auth.signInWithPopup(provider).then((result) => {
            dispatch({
                type: actionType.SET_USER,
                user: result.user,
            });
        }).catch((error) => alert(error.message));

    };

    return (
        <div className="login">
            <div className="login__container">
           <img 
           src="https://upload.wikimedia.org/wikipedia/commons/9/90/WhatsApp_font_awesome.svg"
           alt=""
           />
           <div className="login__text">
               <h5>Sign in to ChitChat!</h5>
           </div>

           <Button onClick={signIn}>Sign in With Google</Button>
            </div>
            </div>
    );
}

export default Login;