import React from 'react';
import Logo from '../Logo';
import SearchBar from '../SearchBar';
import CartBtn from '../CartBtn';
import Container from '../Container';
import Row from '../Row';
import Col from '../Col';

import './style.css'

const Header = () => {
    return (
        <div className="header">
            <Container>
                <Row>
                    <Col>
                        <CartBtn />
                        <Logo />
                        <SearchBar />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Header;
