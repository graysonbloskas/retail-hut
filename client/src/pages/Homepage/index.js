import React from "react";
import Container from "../../components/Container";
import Col from "../../components/Col";
import Row from "../../components/Row";
import homepageHero from "../../components/Homepage-Hero";
import Header from "../../components/Header";
import FeaturedList from "../../components/FeaturedList";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

const Homepage = () => {

    return (
        <div>
        <Container fluid>
            <Row>
                <Col size='md-6'>
                    <Header />           
                </Col>
                <Nav />
            </Row>
            <Row>
            <FeaturedList />
            </Row>
              <Col>
                 <Row>
                    <Footer />
                  </Row>
              </Col>
        </Container>
        </div>
    )
}


export default Homepage;
