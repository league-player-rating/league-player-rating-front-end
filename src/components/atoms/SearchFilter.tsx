import React from 'react';
import styled from "styled-components";

interface IProps extends React.HTMLProps<HTMLInputElement> {
  updateValue: (str: string) => void
};

const SearchFilter: React.FC<IProps> = ({ value, updateValue, ...props }) => {
  return (
    <Input
      type="text"
      placeholder="Search for..."
      value={value}
      onChange={(e) => updateValue(e.target.value)}
    />
  )
}

export default SearchFilter;

const Input = styled.input`
  border: none;
  border-radius: 4px;
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.15);
  background-color: #FFFFFF;
  outline: none;
  padding: 12px;
  font-size: 16px;
`;