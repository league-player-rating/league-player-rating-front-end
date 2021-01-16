import styled from "styled-components";

interface IProps {
  fullWidth?: boolean;
}

const CardContainer = styled.div<IProps>`
  width: ${({ fullWidth }) => fullWidth ? "100%" : "45%"};
  background-color: #FFFFFF;
  border-radius: 20px;
  padding: 32px 40px;
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.15);
  display: flex;
  margin-top: 40px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;

export default CardContainer;