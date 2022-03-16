import { Pagination, PaginationLink, Table } from 'reactstrap';
import styled from 'styled-components';

export const TableStyled = styled(Table)`
   margin: 20px 0;
`;

export const Title = styled.td`
   color: #32325d;
   text-align: center;
   margin-top: 5px;
`;

export const PaginationStyled = styled(Pagination)`
   margin-bottom: 10px;
   margin: 0 auto;
`;
export const PaginationLinkStyled = styled(PaginationLink)`
   .page-item {
      cursor: ${({ disabled }) => disabled ? 'not-allowed': 'pointer'};
      background-color: ${({ select }) => select ? '#0172f6': '#fff'}
   }
`;