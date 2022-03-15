// author francisco wanderly
import React from 'react';
import SimpleHeader from "components/Headers/SimpleHeader.js";
import { Container } from 'reactstrap';
import { TableComponent } from 'components/Table';
import axios from 'axios';

export const Challenge = () => {
   // const theme = useTheme();
   const columns = [
      {
         name: 'name',
         sorteable: true,
      },
      {
         name: 'email',
         sorteable: false,
      },
      {
         name: 'cargo',
         sorteable: false,
      }
   ];
   const fetchData = (page = 0, pageSize = 5) => {
      return axios(`http://localhost:3333/user?_page=${page}&_limit=${pageSize}`, { method: 'GET' });
   };

   return (
      <>
         <SimpleHeader name="Challenge" parentName="Tables" />
         <Container>
            <TableComponent
               themeColor="light"
               onRowClicked={(row) => {}}
               fetchData={fetchData}
               columns={columns}
            />
         </Container>
      </>
   );
};