import React from 'react';
import Container from '../../components/Container';
import Col from '../../components/Col';
import Row from '../../components/Row';
import homepageHero from '../../components/Homepage-Hero';
import Header from '../../components/Header'
import FeaturedList from '../../components/FeaturedList';

const Homepage = () => {
    return (
        <Container fluid>
            <Row>
                <Col size='md-6'>
                    <Header />
                </Col>
            </Row>
            <Row>
            <FeaturedList />
            </Row>
        </Container>
    )
}

export default Homepage;