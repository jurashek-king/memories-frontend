import styled from 'styled-components';

const Wrapper = styled.form`
  border: 1px solid #1fdbd8;
  background-color: #fff;
  width: 18rem;
  height: 25rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  border-radius: 10px;

  p {
    font-weight: 700;
    font-size: 1.5rem;
    color:#3cc5ec;
  }

  textarea {
    box-sizing: border-box;
    width: 100%;
    height: 30%;
    resize: none;
    font-size: 1rem;
  }

  input {
    width: 100%;
    height: 2rem;
    margin-bottom: 0.7rem;
  }

  input:first-of-type {
    margin-top: 0.7rem;
  }

  input[type='file'] {
    margin-top: 1rem;
    font-size: 0.9rem;
  }

  button {
    background-color: #3cc5ec;
    height: 2rem;
    border: none;
    border-radius: 2px;
  }

`;

export default Wrapper;
