import { Pagination, PaginationLink, Table } from 'reactstrap';
import styled from 'styled-components';

export const TableStyled = styled(Table)`
   margin: 20px 0;
   border-collapse: collapse;
   & tr {
      color: ${({ theme }) => theme.text};
      background-color: ${({ theme }) => theme.rowTable};
   }
   & tr:nth-child(even), thead {
      color: ${({ theme }) => theme.text};
      background-color: ${({ theme }) => theme.outherRowTable};
   }
   & thead {
      font-weight: 600;
   }
`;

export const Title = styled.td`
   color: ${({ theme }) => theme.title};
   text-align: center;
   margin-top: 5px;
`;

export const PaginationStyled = styled(Pagination)`
   margin-bottom: 10px;
   margin: 0 auto 100px;
`;
export const PaginationLinkStyled = styled(PaginationLink)`
   color: ${({ select, theme }) => select ? '#0172f6': theme.text};
   background-color: ${({ theme }) => theme.rowTable};
   cursor: ${({ disabled }) => disabled ? 'not-allowed': 'pointer'};
`;