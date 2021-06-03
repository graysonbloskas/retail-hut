import React from 'react'
import { Container, FormWrap, FormContent, Form, FormInput, FormH1, FormLabel, FormButton, Text } from './elements'
import Logo from '../Logo';

function BizSignUp() {
  return (
    <div>
      <Logo /> 
      <Container>
        <FormWrap>
          <FormContent>
            <Form action='#'>
              <FormH1>Sign up to start selling!</FormH1>
              <FormLabel htmlFor='for'>Shop Name</FormLabel>
                <FormInput htmlFor='businessName' required />
                <FormLabel htmlFor='for'>Business Username</FormLabel>
                <FormInput htmlFor='lastName' required />
              <FormLabel htmlFor='for'>Business Email</FormLabel>
                <FormInput htmlFor='email' required />
              <FormLabel htmlFor='for'>Password</FormLabel>
                <FormInput htmlFor='password' required />
                <FormLabel htmlFor='for'>Submit your Business License</FormLabel>
                <FormInput type='file'></FormInput>
              <FormButton type='submit'>Continue</FormButton>
              <Text>Already have an account? Sign in!</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </div>
  )
}

export default BizSignUp;