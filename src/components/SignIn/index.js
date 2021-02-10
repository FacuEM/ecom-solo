import React, { useState } from "react";
import "./styles.scss";
import { signInWitGoogle, auth } from "./../../firebase/utils";
import { Link, useHistory } from "react-router-dom";
import FormInput from "./../forms/FormInput";
import Button from "./../forms/Button";
import AuthWrapper from "./../AuthWrapper";

const SignIn = (props) => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setEmail("");
      setPassword("");
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const configAuthWrapper = {
    headline: "LogIn",
  };
  return (
    <AuthWrapper {...configAuthWrapper}>
      <div className="formWrap">
        <form onSubmit={handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            handleChange={(e) => setEmail(e.target.value)}
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            handleChange={(e) => setPassword(e.target.value)}
          />

          <Button type="submit">LogIn</Button>

          <div className="socialSignin">
            <div className="row">
              <Button onClick={signInWitGoogle}>Sign in with Google</Button>
            </div>
          </div>
          <div className="links">
            <Link to="recovery">Reset Password</Link>
          </div>
        </form>
      </div>
    </AuthWrapper>
  );
};

export default SignIn;
