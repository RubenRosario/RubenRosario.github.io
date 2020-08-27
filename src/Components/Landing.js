import React from 'react';
import Polygon from '../3d models/Polygon';

import './Landing.css';

const Landing = (props) => {
  return (
    <section className="landing">
      <div className="link-container">
        <div className="landing-item about">
          <Polygon
            polygonType="octahedron"
            illoSelector="octahedron-container"
            colors={[
              '#211912',
              '#533e2d',
              '#211912',
              '#533e2d',
              '#211912',
              '#533e2d',
            ]}
          />
        </div>
        <div className="landing-item education">
          <Polygon
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
        <div className="landing-item skills">
          <Polygon
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
        <div className="landing-item interests">
          <Polygon
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
      </div>
    </section>
  );
};

export default Landing;
