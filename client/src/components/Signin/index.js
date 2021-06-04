import React from 'react'
import { Container, FormWrap, FormContent, Form, FormInput, FormH1, FormLabel, FormButton, Text } from './elements'
import Logo from '../Logo';
import './style.css'

function SignIn() {
  return (
    <div>
      <Logo /> 
      <Container>
        <FormWrap>
          <FormContent>
            <Form action='#'>
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor='for'>Username</FormLabel>
                <FormInput htmlFor='username' required />
              <FormLabel htmlFor='for'>Password</FormLabel>
                <FormInput htmlFor='password' required />
              <FormButton type='submit'>Continue</FormButton>
              <Text><a href="signup" className="link">Don't have an Account? Sign Up Now!</a></Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </div>
  )
}

export default SignIn