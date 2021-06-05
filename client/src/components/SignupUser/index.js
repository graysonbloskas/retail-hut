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
import Logo from "../Logo";
import API from "../../utils/userAPI";

function SignUp() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [firstName, setName] = useState();
  const [lastName, setLast] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("username is " + username);
    console.log("password is " + password);
    const userInfo = {
      username: username,
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
    };
    // console.log(userInfo);
    API.signUp(userInfo);
  };

  return (
    <div>
      <Logo />
      <Container>
        <FormWrap>
          <FormContent>
            <Form onSubmit={handleSubmit} action="#">
              <FormH1>Sign up to start shopping!</FormH1>
              <FormLabel htmlFor="for">First Name</FormLabel>
              <FormInput
                htmlFor="firstName"
                required
                type="text"
                placeholder="firstname"
                name="firstName"
                onChange={(e) => setName(e.target.value)}
              />
              <FormLabel htmlFor="for">Last Name</FormLabel>
              <FormInput
                htmlFor="lastName"
                required
                type="text"
                placeholder="lastname"
                name="lastName"
                onChange={(e) => setLast(e.target.value)}
              />
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput
                htmlFor="email"
                required
                type="text"
                placeholder="Email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
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
              <Text>Already have an account? Sign in!</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </div>
  );
}

export default SignUp;
