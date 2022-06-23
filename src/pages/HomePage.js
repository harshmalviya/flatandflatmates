import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Highlights from '../components/Highlights';
import { Container } from 'react-bootstrap';
import Banner from '../components/Banner';
import CityListInfo from '../components/CityListInfo';

function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <br />
      <br />
      <Container className="mt-5 bg-primary">
        <CityListInfo />
      </Container>

      <Highlights />

      <Banner />

      <Footer />
    </main>
  );
}

export default HomePage;
