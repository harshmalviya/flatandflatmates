import React, { useEffect, useState } from 'react';
import CityInfo from './CityInfo';
import CityList from './CityList';

function CityListInfo() {
  const [cityData, setCityData] = useState(null);

  async function getCityData(city) {
    const response = await fetch(
      `https://admin.flatandflatmates.com/home/city_description/?city_name=${city}`
    );
    const data = await response.json();
    setCityData(data);
  }
  useEffect(() => {
    getCityData('Delhi');
  }, []);

  return (
    <section className="p-3">
      {cityData && <CityList data={cityData.data} getCityData={getCityData} />}
      {cityData && <CityInfo data={cityData} />}
    </section>
  );
}

export default CityListInfo;
