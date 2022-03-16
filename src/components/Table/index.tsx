import React, { useEffect, useState } from 'react';
import { PaginationItem } from 'reactstrap';
import { PaginationLinkStyled, PaginationStyled, TableStyled, Title } from './style';
interface TableProps {
   themeColor: string;
   fetchData: (page: number, pageSize: number) => Promise<any>;
   columns: {
      name: string;
      action: (col: any | undefined) => void;
      sorteable: boolean;

   }[];
   onRowClicked: (row: any) => void;
   paginationLimit: number;
};

export const TableComponent = ({ 
   themeColor,
   fetchData,
   columns,
   onRowClicked,
   paginationLimit = 5
} : TableProps) => {
   const [page, setPage] = useState(1);
   const [pageSize, setPageSize] = useState(3);
   const [data, setData] = useState([]);
   const [totalPage, setTotalPage] = useState(0);

   useEffect(() => {
      async function getData(){
         let totalElements = 0;
         const result = await fetchData(page, pageSize).then(res => {
            totalElements = Number(res.headers["x-total-count"]);
            return res.data;
         })
         .catch(err => null);
         setTotalPage(Math.ceil(totalElements / pageSize));
         console.log(new Array(Math.ceil(totalElements / pageSize)).forEach((sei, index) => index));
         setData(result);
      }
      getData();
   }, [page, pageSize]);

   const renderPaginationItem = () => {
      const arrMap = [];
      for(let i = 1; i <= totalPage; i++){
         arrMap.push(i);
      }
      return arrMap.map(ind => (
         <PaginationItem key={ind}>
            <PaginationLinkStyled
               href="#"
               select={ind === page}
               onClick={() => setPage(ind)}
            >
               {ind}
            </PaginationLinkStyled>
         </PaginationItem>
      ))
   };

   return (
      <>
         <TableStyled>
            <thead key={Math.random()}>
               {columns?.map(col => (
                  <th key={col?.name}>
                     {col.name}
                  </th>
               ))}
            </thead>
            {data.length ? (
               <tbody key={Math.random()}>
                  {data?.map((row, index) => (
                     <tr onClick={() => onRowClicked(row)} key={index}>
                        {columns.map(col => (
                           <td onClick={() => col.action(row[col.name])} key={col.name}>{row[col.name]}</td>
                        ))}
                     </tr>
                  ))}
               </tbody>
            ) : (
               <Title>Records Not Found</Title>
            )}
         </TableStyled>
         <PaginationStyled
            aria-label="Page navigation example"
            size="sm"
         >
            <PaginationItem>
               <PaginationLinkStyled
                  href={page + 1 <= 0 ? '-1' : '#'}
                  onClick={() => setPage(old => old -1)}
                  previous />
            </PaginationItem>
            {renderPaginationItem()}
            <PaginationItem>
               <PaginationLinkStyled
                  href={page + 1 >= totalPage ? '-1' : '#'}
                  onClick={() => setPage(old => old -1)}
                  next />
            </PaginationItem>
         </PaginationStyled>
      </>
   );
};