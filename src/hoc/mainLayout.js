import React from 'react';
import { Container } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';

const MainLayout = (props) => {
  return ( 
    <Container>
      {props.children}
      <ToastContainer />
    </Container>
  );
}
 
export default MainLayout;