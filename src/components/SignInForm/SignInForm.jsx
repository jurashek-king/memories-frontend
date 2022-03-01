import React, { useState } from 'react';
import {
  SignInStyled,
  StyledFormInput,
  StyledFormButton,
} from './SigInFormStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const SignInForm = () => {
  const [formData, setFormData] = useState('');

  return (
    <SignInStyled>
      <FontAwesomeIcon className="lock" icon={faLock} />
      <p>Sign In</p>
      <StyledFormInput name="email" placeholder="Email Address" />
      <StyledFormInput name="password" placeholder="Password" type="password" />
      <StyledFormButton type='button' >Sign In</StyledFormButton>
      <p>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
    </SignInStyled>
  );
};

export default SignInForm;
