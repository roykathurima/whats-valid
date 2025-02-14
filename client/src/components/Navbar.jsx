import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';

const AppNavbar = () => { 
    // Set Modal Display State 
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <Navbar bg=''>
                <Container fluid>

                </Container>
            </Navbar>

            <Modal 
                size='lg'
                show={showModal}
                onHide={() => setShowModal(false)}
                aria-labelledby='signup-modal'>


            </Modal>

        </>
    );
};

export default AppNavbar;