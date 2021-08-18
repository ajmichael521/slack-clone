import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = (e) => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://www.pngkey.com/png/detail/223-2232543_slack-logo-png-transparent-slack-logo-png.png"
          alt="Slack Logo Png Transparent - Slack Logo Png@pngkey.com"
        />
        <h1>SIGN IN TO SLACK</h1>
        <p>Ajmichael.slack.com</p>
        <Button onClick={signIn}>SIGN IN WITH GOOGLE</Button>
      </div>
    </div>
  );
}

export default Login;
