import styled from 'styled-components';

const Wrapper = styled.header`
  position: sticky;
  margin: 1rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vw;
  height: 3rem;
  border: 1px solid #1fdbd8;
  border-radius: 5px;
  background-color: white;
  p {
    font-size: 2rem;
  }
  img {
    height: 2rem;
    margin-left: 0.125rem;
  }
`;

export default Wrapper;
