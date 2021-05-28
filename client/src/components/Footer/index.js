import React from "react";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";

function Footer() {
  return (
    <div className="Footer">
      <Container>
        <Row>
          <Col>
            <div>
              <ul>
                <li>
                  <p>This could be the change currency thing</p>
                </li>
                <li>
                  <a>Terms of Service</a>
                </li>
                <li>
                  <a>Privacy Statement</a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
