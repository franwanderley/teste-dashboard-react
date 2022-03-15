import { any, array } from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Table } from 'reactstrap';
import { TableStyled, Title } from './style';
interface TableProps {
   themeColor: string;
   fetchData: (page: number, pageSize: number) => Promise<any>;
   columns: {
      name: string;
      action?: () => {};
      sorteable: boolean;

   }[];
   onRowClicked: (row: any) => void;
};

export const TableComponent = ({ 
   themeColor,
   fetchData,
   columns,
   onRowClicked
} : TableProps) => {
   const [page, setPage] = useState(0);
   const [pageSize, setPageSize] = useState(5);
   const [data, setData] = useState([]);

   useEffect(() => {
      async function getData(){
         const result = await fetchData(page, pageSize).then(res => res.data)
         .catch(err => null);
         setData(result);
         console.log(result[0][columns[0].name]);
      }
      getData();
   }, [fetchData]);

   return (
      <TableStyled>
         <thead key={Math.random()}>
            {columns?.map(col => (
               <th key={col?.name}>
                  {col.name}
               </th>
            ))}
         </thead>
         <tbody key={Math.random()}>
            {data.length ? (
               data?.map((row, index) => (
                  <th onClick={() => onRowClicked(row)} key={index}>
                     {columns.map(col => (
                        <td key={col.name}>{row[col.name]}</td>
                     ))}
                  </th>
               ))
            ): (
               <Title>Records Not Found</Title>
            )}
         </tbody>
      </TableStyled>
   );
};