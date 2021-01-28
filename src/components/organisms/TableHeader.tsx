import { PropsWithChildren, ReactElement } from "react";
import { HeaderGroup } from "react-table";
import styled from "styled-components";
import Chevron from "../atoms/Chevron";

interface IProps<T extends object> {
  headerGroups: HeaderGroup<T>[]
}

function TableHeader <T extends object> ({
  headerGroups
}: PropsWithChildren<IProps<T>>): ReactElement {
  return (
    <thead>
      {headerGroups.map(headerGroup => (
        <Row {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map(column => {
            return (
              <Cell
                {...column.getHeaderProps(column.getSortByToggleProps())}
                width={column.width}
              >
                {column.render('Header')}
                {column.isSorted
                  ? column.isSortedDesc
                    ? <Chevron rotate />
                    : <Chevron />
                  : ''}
              </Cell>
            )
          })}
        </Row>
      ))}
    </thead>
  )
}

export default TableHeader;

const Row = styled.tr`
  border-bottom: 1px solid #707070;
`;

const Cell = styled.th<{ width?: string | number}>`
  text-align: left;
  padding-bottom: 4px;
  font-weight: 500;
`;