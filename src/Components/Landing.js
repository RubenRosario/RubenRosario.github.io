import React from 'react';
import { Link } from 'react-router-dom';

import PolygonContainer from '../Components/PolygonContainer';

import './Landing.css';

const Landing = (props) => {
  return (
    <main className="landing">
      <section className="welcome-container">
        <p className="welcome-message fade-in">
          <span className="greeting">Hello there!</span>
          <span className="name">I am Ruben.</span>
          <span className="message">
            Welcome to my website! Please choose a stone to start.
          </span>{' '}
        </p>
      </section>
      <section className="polygons-container">
        <div className="landing-item about bounce-in-top1">
          <Link to="/about">
            <PolygonContainer
              polygonName="About me"
              polygonType="octahedron"
              colors={[
                '#211912',
                '#533e2d',
                '#211912',
                '#533e2d',
                '#211912',
                '#533e2d',
              ]}
            />
          </Link>
        </div>
        <div className="landing-item education bounce-in-top2">
          <PolygonContainer
            polygonName="Education"
            polygonType="icosahedron"
            illoSelector="icosahedron-container"
            colors={[
              '#d8c269',
              '#e2d291',
              '#e8daa5',
              '#d8c269',
              '#d2ba55',
              '#ede3ba',
            ]}
          />
        </div>
        <div className="landing-item skills bounce-in-top3">
          <PolygonContainer
            polygonName="Skills"
            polygonType="dodecahedron"
            illoSelector="dodecahedron-container"
            colors={[
              '#423224',
              '#533E2D',
              '#74573f',
              '#644a36',
              '#856348',
              '#533E2D',
              '#74573f',
            ]}
          />
        </div>
        <div className="landing-item interests bounce-in-top4">
          <PolygonContainer
            polygonName="Interests"
            polygonType="tetrahedron"
            illoSelector="tetrahedron-container"
            colors={[
              '#B88B4A',
              '#a77d42',
              '#bf975c',
              '#c6a26f',
              '#B88B4A',
              '#c6a26f',
            ]}
          />
        </div>
      </section>
    </main>
  );
};

export default Landing;
