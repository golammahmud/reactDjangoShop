import React, { useState } from 'react';
import { MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody
} from 'mdb-react-ui-kit';

 function OrdersModal({Ordersdetails,VisibilityIcon}) {

  const [optSmModal, setOptSmModal] = useState(false);

  const toggleShow = () => setOptSmModal(!optSmModal);
  const [order, setOrder] = React.useState([]);

  return (
    <>
      <MDBBtn onClick={toggleShow}><VisibilityIcon style={{fontSize: '30px' ,color:"red"}}  onClick={() => {
                          setOrder(order);
                         
                        }}/></MDBBtn>
      <MDBModal show={optSmModal} tabIndex='-1' setShow={setOptSmModal}>
        <MDBModalDialog size='xl'>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Small modal</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody><Ordersdetails/></MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}

export default OrdersModal;