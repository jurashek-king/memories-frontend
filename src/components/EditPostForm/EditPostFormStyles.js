import styled from "styled-components";

const Wrapper = styled.form`
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  min-height: 25rem;
  width: 22rem;
  border-radius: 10px;
  margin: auto;
  --PL: 2.5rem;
  --PR: 2.5rem;
 
  p {
    margin: 1rem 5rem 1rem 5rem;
    font-weight: 700;
    font-size: 1.5rem;
    color: #3cc5ec;
    text-align: center;
  }

  input {
    height: 2rem;
    margin-top: 1rem;
    margin-right: var(--PR);
    margin-left: var(--PL);
  }

  input[type='file'] {
    font-size: 0.9rem;
  }

  textarea {
    min-height: 10rem;
    resize: none;
    margin-top: 1rem;
    margin-right: var(--PR);
    margin-left: var(--PL);
  }
  
  img {
    display: block;
    /* max-width: 15rem; */
    height: auto;
    margin: 0 var(--PR) 0 var(--PL);
  }


  #buttons {
    display: flex;
    justify-content: space-between;
    margin: 1rem var(--PR) 1rem var(--PL);
  }

  button {
    width: 5rem;
    background-color: #3cc5ec;
    border: none;
    height: 2rem;
    border-radius: 2px;
  }

`;

export default Wrapper;