import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px solid #1fdbd8;
  background-color: #fff;
  height: 20rem;
  width: 15rem;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  /* grid-area: post; */
  img {
    width: 100%;
  }
  
  #overview { 
    background-image: url(${props => props.image});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 10rem;
  }

  #author {
    position: absolute;
    top: 1rem;
    left: 1rem;
    font-weight: 700;
    font-size: 1.2rem;
    max-width: 10.5rem;
    overflow: hidden;
  }
  
  #timestamp {
    position: absolute;
    top: 2.5rem;
    left: 1rem;
  }

  #tags {
    margin-top: 0.3rem;
    margin-left: 1rem;
    font-size: 0.8rem;
  }

  #excerpt {
    overflow-wrap: break-word;
    word-break: break-all;
    margin-left: 1rem;
    margin-right: 1rem;

  }

  #title {
    margin-left: 1rem;
    margin-right: 1rem;
    margin-top: 0.3rem;
    margin-bottom: 0.3rem;
    font-weight: 700;
    font-size: 1.2rem;
    overflow: hidden;
    text-overflow: ellipsis
  }

  .post-footer {
    position: absolute;
    bottom: 0;
    /* border: 1px solid gray; */
    width: 100%;
    padding-top: 0.6rem;
    padding-bottom: 0.6rem;
    display: flex;
    justify-content: space-around;
  }

  button .icon {
    margin-right: 0.2rem;
  }

  button {
    background: none;
    cursor: pointer;
    border: none;
  }

  a {
    position: relative;
    top: 2rem;
    left: 12rem;
    color: black;
  }

`;

export default Wrapper;