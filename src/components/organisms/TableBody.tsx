import { PropsWithChildren } from "react";
import { Row, TableBodyPropGetter, TableBodyProps } from "react-table";
import styled from "styled-components";

interface IProps<T extends object> {
  getTableBodyProps: (propGetter?: TableBodyPropGetter<T>) => TableBodyProps;
  pagination: boolean;
  prepareRow: (row: Row<T>) => void;
  page: Row<T>[];
  rows: Row<T>[];

}

function TableBody<T extends object> ({
  getTableBodyProps,
  pagination,
  prepareRow,
  page,
  rows,
}: PropsWithChildren<IProps<T>>) {
  return (
    <tbody {...getTableBodyProps()}>
      {pagination
        ? page.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <Cell {...cell.getCellProps()} width={cell.column.width}>{cell.render('Cell')}</Cell>
                )
              })}
            </tr>
          )}
        ) : rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <Cell {...cell.getCellProps()} width={cell.column.width}>{cell.render('Cell')}</Cell>
                )
              })}
            </tr>
          )}
        )
      }
    </tbody>
  )
}

export default TableBody;

const Cell = styled.td<{width?: string | number }>`
  text-align: left;
  padding: 8px 0;
`;