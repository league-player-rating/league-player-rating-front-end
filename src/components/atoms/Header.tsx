import styled from "styled-components";

interface IProps {
  align?: "center" | "left" | "right"
}

const Header: React.FC<IProps> = styled.h1<IProps>`
  text-align: ${({ align }) => align || "left"};
  font-size: 96px;
  font-weight: bold;
  margin: 0;
  text-shadow: 0px 3px 6px 6px rgba(0,0,0,0.16);
`;

export default Header;