import React, { useState } from 'react';
import Polygon from '../3d models/Polygon';

import './PolygonContainer.css';

const PolygonContainer = (props) => {
  const polygonType = props.polygonType;
  const colors = props.colors;
  const polygonName = props.polygonName;

  const [isNameShowed, showName] = useState('polygon-name-hide');

  const onMouseOverHandler = () => {
    showName(`polygon-name-show tracking-in-expand ${textColor}`);
  };

  const onMouseLeaveHandler = () => {
    showName('polygon-name-hide ');
  };

  // Set text color based on polygon shape
  /*tetrahedron icosahedron dodecahedron octahedron*/
  let textColor;
  switch (polygonType) {
    case 'tetrahedron':
      textColor = 'chocolate';
      break;
    case 'icosahedron':
      textColor = 'dark-chocolate';
      break;
    case 'dodecahedron':
      textColor = 'sand';
      break;
    case 'octahedron':
      textColor = 'camel';
      break;
    default:
  }

  return (
    <React.Fragment>
      <div className={isNameShowed} onMouseLeave={onMouseLeaveHandler}>
        <span>{polygonName}</span>
      </div>
      <Polygon
        polygonType={polygonType}
        illoSelector={`${polygonType}-container`}
        colors={colors}
        onMouseOver={onMouseOverHandler}
      />
    </React.Fragment>
  );
};

export default PolygonContainer;
