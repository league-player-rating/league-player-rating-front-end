import styled from "styled-components";

const BodyContainer = styled.main`
  padding: 60px 12vw;

  @media screen and (max-width: 1450px) {
    padding: 60px 6vw;
  }

  @media screen and (max-width: 650px) {
    padding: 60px 2vw;
  }
`;

export default BodyContainer;