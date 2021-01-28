import styled from "styled-components";

interface IProps {
  rotate?: boolean;
}

const Chevron: React.FC<IProps> = ({
  rotate
}) => {
  return (
    <Wrapper>
      <Triangle rotate={rotate} />
    </Wrapper>
  )
}

export default Chevron;

const Wrapper = styled.div`
  padding-bottom: 1px;
  display: inline-block;
`;

const Triangle = styled.div<IProps>`
  width: 0;
  height: 0;
  margin-left: 8px;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 6px solid #000;
  ${({ rotate }) => rotate && `transform: rotate(180deg);`};
`;