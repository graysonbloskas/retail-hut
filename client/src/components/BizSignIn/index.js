import React from 'react'
import { Container, FormWrap, FormContent, Form, FormInput, FormH1, FormLabel, FormButton, Text } from './elements'
import Logo from '../Logo';

function bizSignIn() {
  return (
    <div>
      <Logo /> 
      <Container>
        <FormWrap>
          <FormContent>
            <Form action='#'>
              <FormH1>Sign in to your Shop!</FormH1>
              <FormLabel htmlFor='for'>Business Username</FormLabel>
                <FormInput htmlFor='email' required />
              <FormLabel htmlFor='for'>Password</FormLabel>
                <FormInput htmlFor='password' required />
              <FormButton type='submit'>Continue</FormButton>
              <Text><a href="/bizsignup">Don't have a store? Sign Up Now!</a></Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </div>
  )
}

export default bizSignIn