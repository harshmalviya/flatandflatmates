import React, { useState } from 'react';

function CityList({ data, getCityData }) {
  const [selectedCity, setSelectedCity] = useState(1);
  function handleSelectedCityChange(id) {
    setSelectedCity(id);
    getCityData(data[id - 1].name);
  }
  return (
    <div className="bg-white p-3 pb-0 d-flex gap-2 justify-content-center ">
      {data.map((city) => (
        <div
          key={city.id}
          className=""
          style={{ cursor: 'pointer' }}
          onClick={() => handleSelectedCityChange(city.id)}
        >
          <img
            src={city.image}
            className="img-fluid mb-2"
            alt=""
            style={{
              width: '100%',
              height: '80%',
              maxWidth: '123px',
              maxHeight: '108px'
            }}
          />
          <p className="text-center">{city.name}</p>
        </div>
      ))}
    </div>
  );
}

export default CityList;
