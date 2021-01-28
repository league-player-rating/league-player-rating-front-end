import { PropsWithChildren, ReactElement } from "react";
import { useTable, useSortBy, usePagination, TableOptions } from "react-table";
import styled from "styled-components";
import Pagination from "./Pagination";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

interface ITableDefaultProps<T extends object = {}> extends TableOptions<T> {};

interface IProps<T extends object> extends ITableDefaultProps<T> {
  pagination?: boolean;
}

const Table =
  <T extends object>
  ({
    columns,
    data,
    pagination,
  }
  : PropsWithChildren<IProps<T>>
  ): ReactElement => {
  const instance = useTable(
    {
      columns,
      data,
    },
    useSortBy,
    usePagination
  );

  return (
    <Wrapper>
      <TableWrapper>
        <TableEntity {...instance.getTableProps()}>
          <TableHeader
            headerGroups={instance.headerGroups}
          />
          <TableBody
            getTableBodyProps={instance.getTableBodyProps}
            pagination={!!pagination}
            prepareRow={instance.prepareRow}
            rows={instance.rows}
            page={instance.page}
          />
        </TableEntity>
      </TableWrapper>
      {pagination && <Pagination
        canPreviousPage={instance.canPreviousPage}
        canNextPage={instance.canNextPage}
        pageOptions={instance.pageOptions}
        pageCount={instance.pageCount}
        gotoPage={instance.gotoPage}
        nextPage={instance.nextPage}
        previousPage={instance.previousPage}
        setPageSize={instance.setPageSize}
        pageIndex={instance.state.pageIndex}
        pageSize={instance.state.pageSize}
      />}
    </Wrapper>
  )
}

export default Table;

const Wrapper = styled.div`
  padding: 20px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
`;

const TableEntity = styled.table`
  border-collapse: collapse;
`;