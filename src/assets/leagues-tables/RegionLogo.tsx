import styled from "styled-components";

interface IProps {
  region: string;
  height?: number;
}

const RegionLogo: React.FC<IProps> = ({ region, height }) => {
  const newRegion = region.toLowerCase(); // TODO: Delete this line and format this in API
  const regionImage = require(`./${newRegion}.png`);
  return <Image src={regionImage.default} alt={region} height={height} />
}

export default RegionLogo;

const Image = styled.img<{ height?: number }>`
  height: ${({ height }) => height ? `${height}px` : "auto"};
`;