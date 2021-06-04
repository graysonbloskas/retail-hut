import React from 'react'
import { Container, FormWrap, FormContent, Form, FormInput, FormH1, FormLabel, FormButton, Text } from './elements'
import Logo from '../Logo';

function SignUp() {
  return (
    <div>
      <Logo /> 
      <Container>
        <FormWrap>
          <FormContent>
            <Form action='#'>
              <FormH1>Sign up to start shopping!</FormH1>
              <FormLabel htmlFor='for'>First Name</FormLabel>
                <FormInput htmlFor='firstName' required />
                <FormLabel htmlFor='for'>Last Name</FormLabel>
                <FormInput htmlFor='lastName' required />
              <FormLabel htmlFor='for'>Username</FormLabel>
                <FormInput htmlFor='username' required />
              <FormLabel htmlFor='for'>Password</FormLabel>
                <FormInput htmlFor='password' required />
              <FormButton type='submit'>Continue</FormButton>
              <Text>Already have an account? Sign in!</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </div>
  )
}

export default SignUp;