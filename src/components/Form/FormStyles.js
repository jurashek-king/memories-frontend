import styled from "styled-components";

const Wrapper = styled.form`
  border: 1px solid #1fdbd8;
  background-color: #fff;
  width: 15rem;
  height: 20rem;
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;


  textarea {
    box-sizing: border-box;
    width: 100%;
    height: 30%;
    resize: none;
    font-size:1rem;
  }

  input {
    width: 100%;
    height: 2rem;
    margin-bottom: .5rem;
  }

  input:first-of-type {
    margin-top: .5rem;
  }

  input[type="file"] {
    font-size: 0.8rem;
  }

  button {
    background-color: #3c00ff;
    color: white;
    height: 2rem;
    margin-bottom: 1rem;
    outline: none;
  }
`;

export default Wrapper;