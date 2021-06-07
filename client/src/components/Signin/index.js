import React, { useState } from "react";
import {
  Container,
  FormWrap,
  FormContent,
  Form,
  FormInput,
  FormH1,
  FormLabel,
  FormButton,
  Text,
} from "./elements";
import "./style.css";
import API from "../../utils/userAPI"

function SignIn() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("username is " + username);
    console.log("password is " + password);
    const userInfo = {
      username: username,
      password: password
    }
    // console.log(userInfo);
    API.login(userInfo)
  };


  return (
    <div>
      <Container>
        <FormWrap>
          <FormContent>
            <Form onSubmit={handleSubmit} action="#">
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor="for">Username</FormLabel>
              <FormInput
                htmlFor="username"
                required
                type="text"
                placeholder="Username"
                name="username"
                onChange={(e) => setUsername(e.target.value)}
              />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput
                htmlFor="password"
                required
                type="password"
                placeholder="Password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormButton type="submit">Continue</FormButton>
              <Text>
                <a href="signup" className="link">
                  Don't have an Account? Sign Up Now!
                </a>
              </Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </div>
  );
}

export default SignIn;
