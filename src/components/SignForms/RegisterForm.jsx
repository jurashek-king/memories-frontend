import React, { useState } from 'react';
import {
  SignUpStyled,
  StyledFormInput,
  StyledFormButton,
} from './SignFormsStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { register } from '../../redux/usersSlice';
import { useDispatch } from 'react-redux';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  repeatedPasswd: '',
};

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [FormData, setFormData] = useState(initialState);

  const handleChange = (event) => {
    const inputName = event.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [inputName]: event.target.value,
    }));
    
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(register(FormData));
    setFormData(initialState)
  }

  return (
    <SignUpStyled onSubmit={handleSubmit}>
      <FontAwesomeIcon className="lock" icon={faLock} />
      <p>Register</p>
      <div>
        <StyledFormInput
          name="firstName"
          placeholder="First Name"
          value={FormData.firstName}
          onChange={handleChange}
          required
        />
        <StyledFormInput
          name="lastName"
          placeholder="Last Name"
          value={FormData.lastName}
          onChange={handleChange}
          required
        />
      </div>
      <StyledFormInput
        name="email"
        placeholder="Email Address"
        value={FormData.email}
        onChange={handleChange}
        required
      />
      <StyledFormInput
        name="password"
        placeholder="Password"
        type="password"
        value={FormData.password}
        onChange={handleChange}
        required
      />
      <StyledFormInput
        name="repeatedPasswd"
        placeholder="Repeat password"
        type="password"
        value={FormData.repeatedPasswd}
        onChange={handleChange}
        required
      />
      <StyledFormButton type="submit">Register</StyledFormButton>
      <p>
        Already have an account? <Link to="/signin">Sign in</Link>
      </p>
    </SignUpStyled>
  );
};

export default RegisterForm;
