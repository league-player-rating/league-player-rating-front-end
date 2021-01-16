import styled from "styled-components";
import nationalities from "../../constants/nationalities";

interface IProps {
  country: string;
}

const Flag: React.FC<IProps> = ({ country }) => {
  return (
    <Image
      src={`https://flagcdn.com/h20/${nationalities[country]}.png`}
      height="20"
      alt={country}
    />
  )
}

export default Flag;

const Image = styled.img`

`;