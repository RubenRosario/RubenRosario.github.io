import React, { useState } from 'react';
import Polygon from '../3d models/Polygon';

import './PolygonContainer.css';

const PolygonContainer = (props) => {
  const polygonType = props.polygonType;
  const colors = props.colors;
  const polygonName = props.polygonName;

  const [isNameShowed, showName] = useState('polygon-name-hide');

  const onMouseOverHandler = () => {
    showName('polygon-name-show');
  };

  const onMouseLeaveHandler = () => {
    showName('polygon-name-hide');
  };

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
