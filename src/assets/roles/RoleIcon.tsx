import styled from "styled-components";

interface IProps {
  role: string;
  dark?: boolean;
  height?: number;
}

const RoleIcon: React.FC<IProps> = ({ role, dark, height }) => {
  const regionImage = require(`./${role}${dark ? "-dark" : ""}.png`);
  return <Image src={regionImage.default} alt={role} height={height} />
}

export default RoleIcon;

const Image = styled.img<{height?: number}>`
  height: ${({ height }) => height ? `${height}px` : "auto"};
`;