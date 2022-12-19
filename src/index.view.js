import styled, { keyframes } from "styled-components";

const AppBar = styled.div`
  display: block;
  position: fixed;
  width: 200px;
  margin-left: 20px;
  z-index: 1;
  background: white;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const skBouncedelay = keyframes`
0% {
    background-color: #2ba805;
    box-shadow: 0 0 5px #2ba805;
  }
  50% {
    background-color: #49e819;
    box-shadow: 0 0 20px #49e819;
  }
  100% {
    background-color: #2ba805;
    box-shadow: 0 0 5px #2ba805;
  }
`;

const Flashing = styled.a`
  background-color: #1c87c9;
  -webkit-border-radius: 60px;
  border-radius: 60px;
  border: none;
  color: #eeeeee;
  cursor: pointer;
  display: inline-block;
  font-family: sans-serif;
  font-size: 20px;
  padding: 5px 15px;
  text-align: center;
  text-decoration: none;
  animation: ${skBouncedelay} 1300ms infinite;
`;

export { AppBar, Flashing, Container };
