import styled from "styled-components";

interface IProps {
  gotoPage: (pageNum: number) => void;
  previousPage: () => void;
  nextPage: () => void;
  canPreviousPage: boolean;
  canNextPage: boolean;
  pageCount: number;
  pageIndex: number;
  pageOptions: Array<number>;
  pageSize: number;
  setPageSize: (pageQuantity: number) => void;
}

const Pagination: React.FC<IProps> = ({
  gotoPage,
  previousPage,
  nextPage,
  canPreviousPage,
  canNextPage,
  pageCount,
  pageIndex,
  pageOptions,
  pageSize,
  setPageSize,
}) => {
  return (
    <Wrapper>
      <PageLength
        value={pageSize}
        onChange={e => setPageSize(Number(e.target.value))}
      >
        {[50, 100, 250].map(pageSize => (
          <option key={pageSize} value={pageSize}>
            Show {pageSize}
          </option>
        ))}
      </PageLength>
      <HandlerWrapper>
        <PageHandlers onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </PageHandlers>
        <PageHandlers onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </PageHandlers>
        <ActivePage>
          Page <strong>{pageIndex + 1}</strong> of <strong>{pageOptions.length}</strong>
        </ActivePage>
        <PageHandlers onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </PageHandlers>
        <PageHandlers onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </PageHandlers>
      </HandlerWrapper>
    </Wrapper>
  )
}

export default Pagination;

const Wrapper = styled.div`
  position: relative;

  @media screen and (max-width: 650px) {
    display: flex;
    flex-direction:  row;
    align-items: center;
    justify-content: space-between;
  }
`;

const PageLength = styled.select`
  position: absolute;
  left: 0;
  border: none;
  outline: none;
  padding: 0 12px;
  border-radius: 1px;

  @media screen and (max-width: 650px) {
    position: relative;
    left: initial;
  }
`;

const HandlerWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  @media screen and (max-width: 650px) {
    position: relative;
    left: initial;
    transform: none;
  }
`;

const PageHandlers = styled.button`
  border: none;
`;

const ActivePage = styled.span`
  margin: 0 4px;
`;