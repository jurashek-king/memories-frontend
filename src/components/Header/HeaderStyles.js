import styled from 'styled-components';

const Wrapper = styled.header`
  position: sticky;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* width: 80vw; */
  height: auto;
  /* border: 1px solid red; */
  
  div {
    border: 1px solid #1fdbd8;
    border-radius: 5px;
    background-color: white;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 3rem;
    p {
      font-size: 2rem;
      font-weight:bold;
      color: #20d1f0;
    }

    img {
      height: 2rem;
      margin-left: 0.125rem;
    }
  }

  nav {
    /* border: 1px solid blue; */
    a {
      color: black;
    }
  }
`;

export default Wrapper;
