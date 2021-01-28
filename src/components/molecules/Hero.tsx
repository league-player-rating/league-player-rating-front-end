import styled from "styled-components";
import Header from "../atoms/Header";

interface IProps {
  background?: string;
  small?: boolean;
  align?: "center" | "left" | "right";
  home?: boolean;
}

const Hero: React.FC<IProps> = ({
  children,
  background,
  small,
  home,
  align,
}) => {
  return (
    <Wrapper background={background} small={small}>
      <StyledHeader home={home} align={align}>{children}</StyledHeader>
    </Wrapper>
  )
}

export default Hero;

const Wrapper = styled.div<IProps>`
  background: linear-gradient(153deg, rgba(9,9,9,1) 0%, rgba(26,26,26,1) 100%);
  ${({ background }) => background && `background-image: url(${background}), linear-gradient(153deg, rgba(9,9,9,1) 0%, rgba(26,26,26,1) 100%);`}
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  color: #FFFFFF;

  padding: 60px 120px;
  min-height: ${({ small }) => small ? "320px" : "640px"};
  position: relative;
  box-shadow: 0 13px 18px 9px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 1450px) {
    padding: 60px 6vw;
  }

  @media screen and (max-width: 650px) {
    padding: 60px 2vw;
  }
`;

const StyledHeader = styled(Header)<{ home?: boolean; }>`
  ${({ home }) => !home && `
    position: absolute;
    bottom: 60px;
  `}
`;