import React, { useState } from 'react';
import {
  SignInStyled,
  StyledFormInput,
  StyledFormButton,
} from './SignFormsStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const initialState = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <SignInStyled onSubmit={handleSubmit}>
      <FontAwesomeIcon className="lock" icon={faLock} />
      <p>Sign In</p>
      <StyledFormInput
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email Address"
        required
      />
      <StyledFormInput
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
        type="password"
        required
      />
      <StyledFormButton type="button">Sign In</StyledFormButton>
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </SignInStyled>
  );
};

export default SignInForm;
