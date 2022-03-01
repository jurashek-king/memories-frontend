import styled from 'styled-components';

const Wrapper = styled.header`
  background-color: #fff;
  margin: 1rem auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: auto;
  border: 1px solid #1fdbd8;
  border-radius: 5px;
  width: 100%;
  
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  p {
    font-size: 2rem;
    font-weight: bold;
    color: #20d1f0;
    display: inline;
  }

  img {
    height: 2rem;
    margin-left: 0.125rem;
  }

  #signin {
    background-color: #3a53f2;
    color: #fff;
    padding: 0.3rem;
    margin-left: 5rem;
  }

  #posts {
    position: absolute;
    margin-top: 5rem;
  }

  a {
    text-decoration: none;
  }

  
`;

export default Wrapper;
