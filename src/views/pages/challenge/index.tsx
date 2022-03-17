// author francisco wanderly
import React, { useState } from 'react';
import { Container } from 'reactstrap';
import { TableComponent } from 'components/Table';
import axios from 'axios';
import { HeaderChallenge } from '../../../components/HeaderChallenge';
import { ThemeProvider } from 'styled-components';
import { light } from 'assets/theme/light';
import { dark } from 'assets/theme/dark';

interface Theme {
   name: string;
   title: string;
   header: string;
   text: string;
   rowTable: string;
   outherRowTable: string;
};

export const Challenge = () => {
   // const theme = useTheme();
   const columns = [
      {
         name: 'name',
         sorteable: true,
         action: () => {},
      },
      {
         name: 'email',
         sorteable: false,
         action: () => {},
      },
      {
         name: 'cargo',
         sorteable: false,
         action: () => {},
      }
   ];
   const [theme, setTheme] = useState<Theme>(light);

   const changeTheme = () => {
      setTheme(theme === light ? dark : light);
   }
   const fetchData = (page = 0, pageSize = 5) => {
      return axios(`http://localhost:3333/user?_page=${page}&_limit=${pageSize}`, { method: 'GET' });
   };

   return (
      <ThemeProvider theme={theme}>
         <HeaderChallenge {...{ changeTheme }}/>
         <Container>
            <TableComponent
               onRowClicked={(row) => {}}
               fetchData={fetchData}
               columns={columns}
               paginationLimit={5}
            />
         </Container>
      </ThemeProvider>
   );
};