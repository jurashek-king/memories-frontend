import styled from "styled-components";

const Wrapper = styled.main`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 0.5fr;
  gap: 1.5rem;
  justify-items: center;

  @media screen and (max-width: 60rem) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column-reverse;
    align-items: center;
    width:20rem;
  }

`;

export default Wrapper;