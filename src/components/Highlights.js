import React from 'react';
import { Card, Container, Col, Row } from 'react-bootstrap';

function Highlights() {
  return (
    <Container className="my-5">
      <Row className="">
        <Col sm={12} md={6} lg={4}>
          <Card className="shadow-lg ">
            <Card.Body className="d-flex justify-between gap-3 py-4">
              <div className="d-flex flex-column align-items-center">
                <img
                  src="/assets/comingHome.svg"
                  alt=""
                  className="img-fluid"
                  style={{ maxWidth: '175px', height: 'auto' }}
                />
                <h5 className="mt-3">Rent</h5>
              </div>
              <div className="d-flex flex-column align-items-center justify-content-between">
                <p style={{ fontSize: '.9rem' }} className="m-0 mb-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque nam laborum.
                </p>
                <i
                  className="fa-solid fa-arrow-right-long text-lightDark"
                  style={{ fontSize: '2rem' }}
                ></i>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <Card className="shadow-lg">
            <Card.Body className="d-flex justify-between gap-3 py-4">
              <div className="d-flex flex-column align-items-center">
                <img
                  src="/assets/rent.svg"
                  alt=""
                  className="img-fluid"
                  style={{ maxWidth: '140px', height: 'auto' }}
                />
                <h5 className="mt-3">PG/Hostel</h5>
              </div>
              <div className="d-flex flex-column align-items-center justify-content-between">
                <p style={{ fontSize: '.9rem' }} className="m-0 mb-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque nam laborum.
                </p>
                <i
                  className="fa-solid fa-arrow-right-long text-lightDark"
                  style={{ fontSize: '2rem' }}
                ></i>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <Card className="shadow-lg">
            <Card.Body className="d-flex justify-between gap-3 py-4">
              <div className="d-flex flex-column align-items-center">
                <img
                  src="/assets/quiteTown.svg"
                  alt=""
                  className="img-fluid"
                  style={{ maxWidth: '150px', height: 'auto' }}
                />
                <h5 className="mt-3">Flatmates</h5>
              </div>
              <div className="d-flex flex-column align-items-center justify-content-between">
                <p style={{ fontSize: '.9rem' }} className="m-0 mb-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque nam laborum.
                </p>
                <i
                  className="fa-solid fa-arrow-right-long text-lightDark"
                  style={{ fontSize: '2rem' }}
                ></i>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Highlights;
