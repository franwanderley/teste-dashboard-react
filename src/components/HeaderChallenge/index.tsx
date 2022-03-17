import React, { useContext } from 'react';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Breadcrumb, BreadcrumbItem, Col, Container, Row } from 'reactstrap';
import styled, { ThemeContext } from 'styled-components';

const BtnTheme = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
   color: ${({theme}) => theme.title};
   font-size: 1rem;
   border: none;
   cursor: pointer;
   background-color: transparent;
   & p {
     margin: 0;
     font-weight: 600;
   }
   & svg {
     margin: 0;
     margin-left: 10px;
   }
`;
const HeaderDiv = styled.div`
  background-color: ${({theme}) => theme.header || '#ccc'};
`;

interface HeaderProps {
  changeTheme: () => any;
}

export const HeaderChallenge = ({ changeTheme }: HeaderProps) => {
  const { name } = useContext(ThemeContext);
   return (
      <HeaderDiv className="header header-light bg-info content__title content__title--calendar">
        <Container fluid>
          <div className="header-body">
            <Row className="align-items-center py-4">
              <Col lg="6" xs="7">
                <Breadcrumb
                  className="d-none d-md-inline-block ml-lg-4"
                  listClassName="breadcrumb-links breadcrumb-dark"
                >
                  <BreadcrumbItem>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <i className="fas fa-home" />
                    </a>
                  </BreadcrumbItem>
                  <BreadcrumbItem>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      Table
                    </a>
                  </BreadcrumbItem>
                  <BreadcrumbItem aria-current="page" className="active">
                    Table Challenge
                  </BreadcrumbItem>
                </Breadcrumb>
              </Col>
              {name === 'light' ? (
                  <BtnTheme onClick={() => changeTheme()}>
                    <p>LIGHT</p><FontAwesomeIcon icon={faSun} />
                  </BtnTheme>
              ): (
                <BtnTheme onClick={() => changeTheme()}>
                  <p>DARK</p><FontAwesomeIcon icon={faMoon} />
                </BtnTheme>
              )}
            </Row>
            <Row className="align-items-center py-4">
              <Col lg="6" xs="7">
                <h6 className="fullcalendar-title h2 text-white d-inline-block mb-0">
                  Table Challenge
                </h6>{" "}
              </Col>
            </Row>
          </div>
        </Container>
      </HeaderDiv>
   );
}