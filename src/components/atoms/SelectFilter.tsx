import styled from "styled-components";

export interface ISelectProps {
  value: string;
  updateValue: (str: string) => void;
}

interface IProps extends ISelectProps {
  metric: string;
  options: Array<string>;
}

const SelectFilter: React.FC<IProps> = ({ metric, options, updateValue, value }) => {
  return (
    <Select onChange={e => updateValue(e.target.value)} value={value}>
      <option value="">Select {metric}...</option>
      {options.map(el => (
        <option key={el} value={el}>{el}</option>
      ))}
    </Select>
  )
}

export default SelectFilter;

const Select = styled.select`
  border: none;
  border-radius: 4px;
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.15);
  background-color: #FFFFFF;
  outline: none;
  padding: 12px;
  font-size: 16px;
  color: ${({ value }) => value ? "black" : "#75758A"};

  > option {
    color: black;
  }
`;