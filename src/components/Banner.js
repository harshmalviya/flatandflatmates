import React from 'react';
import { Button } from 'react-bootstrap';

function Banner() {
  return (
    <section className="bg-secondary">
      <div
        className="py-4 d-flex justify-content-between align-items-center mx-auto"
        style={{ width: '80%' }}
      >
        <img
          src="/assets/amico.svg"
          alt=""
          className="img-fluid"
          style={{ width: '500px', maxWidth: '100%', height: 'auto' }}
        />

        <div className="d-flex flex-column align-items-end">
          <h1 className="text-white mb-4 fw-bold display-4">
            List Your Property
          </h1>
          <p
            className="mb-4 fw-bold"
            style={{ maxWidth: '70%', textAlign: 'right' }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            perspiciatis. Recusandae fuga dolor numquam. Laudantium nisi enim
            nemo consequuntur possimus dolor deleniti sint omnis.
          </p>
          <Button
            className="bg-white text-secondary border-0 rounded-0 shadow-sm"
            variant="secondary"
          >
            List Your Property Here
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Banner;
