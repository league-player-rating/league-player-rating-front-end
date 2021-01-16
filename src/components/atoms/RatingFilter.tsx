import { createSliderWithTooltip, Range } from "rc-slider";
import styled from "styled-components";
import 'rc-slider/assets/index.css';

interface IValue {
  min: number;
  max: number;
}

interface IProps {
  value: IValue;
  metric: string;
  updateValue: (min: number, max: number) => void;
}

const RangeSlider = createSliderWithTooltip(Range);

const RatingFilter: React.FC<IProps> = ({ updateValue, metric, value }) => {
  return (
    <Container>
      <Wrapper>
        <RangeVals>0</RangeVals>
        <RangeSlider
          defaultValue={[0, 100]}
          value={[value.min, value.max]}
          min={0}
          max={100}
          step={1}
          onChange={([min, max]) => updateValue(min, max)}
        />
        <RangeVals>100</RangeVals>
      </Wrapper>
      <FilterTitle>{metric} Rating</FilterTitle>
    </Container>
  )
}

export default RatingFilter;

const Container = styled.div`
  width: 400px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const RangeVals = styled.p`
  margin: 0 18px;
`;

const FilterTitle = styled.h3`
  text-align: center;
  font-size: 1em;
  margin-top: 2px;
  margin-bottom: 0;
`;