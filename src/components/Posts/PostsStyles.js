import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  width: 100%;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  gap: 1rem;
`;
export default Wrapper;