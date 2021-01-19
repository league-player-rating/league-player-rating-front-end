import styled from "styled-components";
import nationalities from "../../constants/nationalities";

interface IProps {
  country: string;
  height?: number
}

const Flag: React.FC<IProps> = ({ country, height }) => {
  return (
    <Image
      src={`https://flagcdn.com/h20/${nationalities[country]}.png`}
      height={height || 20}
      alt={country}
    />
  )
}

export default Flag;

const Image = styled.img`

`;