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
   margin: 0 auto 100px;
`;
export const PaginationLinkStyled = styled(PaginationLink)`
   color: ${({ select }) => select ? '#0172f6': '#aaa'};
   background-color: ${({ disabled }) => disabled ? '#f5f5f5': '#fff'};
   cursor: ${({ disabled }) => disabled ? 'not-allowed': 'pointer'};
   .page-item {
      font-size: 14px;
   }
`;