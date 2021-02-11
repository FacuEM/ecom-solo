import React, { useState, useEffect } from "react";
import FormInput from "./../forms/FormInput";
import Button from "./../forms/Button";
import AuthWrapper from "./../AuthWrapper";
import "./styles.scss";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signUpUser, resetAllAuthForms } from "./../../redux/User/user.actions";

const Signup = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [confirmPassword, setComfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const signUpSuccess = useSelector((state) => state.user.signUpSuccess);
  const signUpError = useSelector((state) => state.user.signUpError);

  useEffect(() => {
    if (Array.isArray(signUpError) && signUpError.length > 0) {
      setErrors(signUpError);
    }
  }, [signUpError]);

  useEffect(() => {
    if (signUpSuccess) {
      setEmail("");
      setPassword("");
      setDisplayName("");
      setComfirmPassword("");
      setErrors([]);
      dispatch(resetAllAuthForms());
      history.push("/");
    }
  }, [signUpSuccess]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(signUpUser({ displayName, email, password, confirmPassword }));
  };

  const configAuthWrapper = {
    headline: "Registration",
  };

  return (
    <AuthWrapper {...configAuthWrapper}>
      <div className="formWrap">
        {errors.length > 0 && (
          <ul>
            {errors.map((err, index) => {
              return <li key={index}>{err}</li>;
            })}
          </ul>
        )}
        <form onSubmit={handleFormSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            placeholder="Full name"
            handleChange={(e) => setDisplayName(e.target.value)}
          />
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
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            placeholder="re-enter password"
            handleChange={(e) => setComfirmPassword(e.target.value)}
          />
          <Button type="submit">Register</Button>
        </form>
      </div>
    </AuthWrapper>
  );
};

export default Signup;
