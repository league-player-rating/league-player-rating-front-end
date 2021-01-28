import styled from "styled-components";
import nationalities from "../../constants/nationalities";

interface IProps {
  country: string;
  height?: number;
  noRound?: boolean;
}

const Flag: React.FC<IProps> = ({ country, height, noRound }) => {
  return (
    <Image
      src={`https://flagcdn.com/h40/${nationalities[country]}.png`}
      noRound={noRound}
      height={height || 40}
      alt={country}
    />
  )
}

export default Flag;

const Image = styled.img<{ noRound?: boolean; }>`
  ${({ noRound, height }) => noRound
    ? ``
    : `
      box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
      border-radius: 50%;
      object-fit: cover;
      height: ${height}px;
      width: ${height}px;
    `
  }
`;