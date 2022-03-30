import styled from 'styled-components';

export const SignInStyled = styled.form`
  border: 1px solid #1fdbd8;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  width: 20rem;
  padding-left: 1rem;
  padding-right: 1rem;
  align-items: center;
  margin: auto;
  background-color: #fff;

  .lock {
    color: white;
    width: 2rem;
    height: 2rem;
    padding: 0.5rem;
    border-radius: 50%;
    background-color: red;
  }

  p:first-of-type {
    font-size: 1.2rem;
    font-weight: 600;
  }

  p:last-child {
    margin-bottom: 1rem;
  }

  * {
    margin-top: 1rem;
  }
`;

export const StyledFormInput = styled.input.attrs((props) => ({
  }))`
  width: 100%;
  height: 2rem;
`;

export const StyledFormButton = styled.button`
  width: 100%;
  height: 2rem;
  background-color: #3a53f2;
  color: #fff;
  border: none;
`;

export const SignUpStyled = styled(SignInStyled)`
  div {
    display: flex;
    gap: 1rem;
  }
`;
