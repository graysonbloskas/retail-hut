import React from 'react';
import Container from '../../components/Container';
import Col from '../../components/Col';
import Row from '../../components/Row';
import Header from '../../components/Header'
import Nav from '../../components/Nav'

const Shoes = () => {
    
    return (
        <Container fluid>
            <Row>
                <Col size='md-6'>
                    <Header />
                    <Nav />
                </Col>
            </Row>
        </Container>
    )
}

export default Shoes;