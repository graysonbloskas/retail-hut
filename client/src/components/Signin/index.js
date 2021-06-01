import React from 'react'
import { Container, FormWrap, FormContent, Form, FormInput, FormH1, FormLabel, FormButton, Text } from './elements'
import Logo from '../Logo';

function SignIn() {
  return (
    <div>
      <Logo /> 
      <Container>
        <FormWrap>
          <FormContent>
            <Form action='#'>
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
                <FormInput htmlFor='email' required />
              <FormLabel htmlFor='for'>Password</FormLabel>
                <FormInput htmlFor='password' required />
              <FormButton type='submit'>Continue</FormButton>
              <Text>Don't have an Account? Sign Up Now!</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </div>
  )
}

export default SignIn