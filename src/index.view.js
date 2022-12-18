import styled from "styled-components";

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

export { AppBar };
