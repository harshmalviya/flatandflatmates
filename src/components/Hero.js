import React from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';

function Hero() {
  return (
    <div className="hero w-100 d-flex justify-content-center">
      <div
        className="position-absolute bg-white rounded"
        style={{ bottom: -50 }}
      >
        <div>
          <div className="d-flex">
            <div className="d-flex align-items-center">
              <button className="btn btn-primary rounded-0 rounded-start text-white px-4 py-2">
                Full House
              </button>
              <button className="btn btn-white rounded-0 px-4 py-2">
                PG/Hostel
              </button>
              <button className="btn btn-white rounded-0 px-4 py-2">
                Flatmates
              </button>
            </div>
            <div className="d-flex align-items-center justify-content-center gap-3 px-4 ">
              <select
                name=""
                id=""
                className="py-1 rounded border"
                style={{ fontSize: '.8rem' }}
              >
                <option>Apartment Type</option>
              </select>
              <select
                name=""
                id=""
                className="py-1 rounded border"
                style={{ fontSize: '.8rem' }}
              >
                <option>Availability</option>
              </select>
            </div>
          </div>
        </div>
        <div className="d-flex">
          <select
            name=""
            id=""
            className="py-2 rounded-start border-end-0 border px-5"
          >
            <option value="">Delhi</option>
          </select>
          <InputGroup className="">
            <InputGroup.Text
              id="basic-addon1"
              className="bg-white rounded-0 border-end-0"
            >
              <i className="fa-solid fa-search"></i>
            </InputGroup.Text>
            <Form.Control
              placeholder="Search Your Property Here..."
              aria-label="Username"
              aria-describedby="basic-addon1"
              className="border-start-0"
            />
            <Button
              variant="primary"
              id="button-addon2"
              className="text-white px-5"
            >
              Search
            </Button>
          </InputGroup>
        </div>
      </div>
    </div>
  );
}

export default Hero;
