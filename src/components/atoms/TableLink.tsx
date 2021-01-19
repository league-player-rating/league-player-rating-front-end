import { Link } from "react-router-dom"
import styled from "styled-components";

interface IProps {
  to: string;
}

const TableLink: React.FC<IProps> = ({ to, children}) => {
  return (
    <CellWrapper>
      <Link
        to={to}
      >
        {children}
      </Link>
    </CellWrapper>
  )
}

export default TableLink;

const CellWrapper = styled.div`
  a {
    color: #090909;
    text-decoration: none;
  }
`;