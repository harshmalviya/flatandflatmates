import React from 'react';

function CityInfo({ data }) {
  let selected = data.data.find((city) => city.name === data.selected) || {};
  return (
    <div className="container">
      <div className="row bg-white mt-5 p-5">
        <div className="col d-flex align-items-center justify-content-center">
          <img
            src={selected.image}
            className="mb-2 img-fluid"
            alt=""
            style={{ width: '100%', objectFit: 'cover', maxHeight: '250px' }}
          />
        </div>
        <div className="col">
          <div className="d-flex flex-column justify-content-between">
            <div>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h3>
                  {selected.name}&nbsp;&nbsp;
                  <i className="fa-solid fa-location-dot"></i>
                </h3>
                <a
                  href={selected.facebook_group_link}
                  className="btn btn-blue text-white rounded-0"
                >
                  <i className="fa-brands fa-facebook-f me-3"></i>
                  Join Our Facebook Group
                </a>
              </div>
              <p className="">{selected.description}</p>
            </div>
            <div className="text-end">
              <h5 className="text-blue">
                <i className="fa-solid fa-users me-3"></i>
                {selected.group_members_count}&nbsp;Group Members
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CityInfo;
