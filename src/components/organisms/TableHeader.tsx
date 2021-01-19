import { PropsWithChildren, ReactElement } from "react";
import { HeaderGroup } from "react-table";
import styled from "styled-components";

interface IProps<T extends object> {
  headerGroups: HeaderGroup<T>[]
}

function TableHeader <T extends object> ({
  headerGroups
}: PropsWithChildren<IProps<T>>): ReactElement {
  return (
    <thead>
      {headerGroups.map(headerGroup => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map(column => {
            return (
              <Cell
                {...column.getHeaderProps(column.getSortByToggleProps())}
                width={column.width}
              >
                {column.render('Header')}
                <span>
                  {column.isSorted
                    ? column.isSortedDesc
                      ? ' 🔽'
                      : ' 🔼'
                    : ''}
                </span>
              </Cell>
            )
          })}
        </tr>
      ))}
    </thead>
  )
}

export default TableHeader;

const Cell = styled.th<{ width?: string | number}>`
  width: ${({ width }) => width ? typeof width === "number" ? `${width}px` : width : "auto"};
`;