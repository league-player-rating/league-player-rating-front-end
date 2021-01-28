import { PropsWithChildren } from "react";
import styled from "styled-components";

const FilterContainer = styled.div<PropsWithChildren<{}>>`
  display: grid;
  ${({ children }) => {
    return children
    && Array.isArray(children)
    && `grid-template-columns: repeat(${children.length}, 1fr);`
  }}
  grid-column-gap: 60px;
  width: 100%;
  flex-direction: row;
  align-items: center;

  @media screen and (max-width: 1900px) {
    grid-column-gap: 24px;
  }

  @media screen and (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

export default FilterContainer