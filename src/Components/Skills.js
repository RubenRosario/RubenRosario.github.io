import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Skills = (props) => {
  const skills = props.skills;

  const skillsJSX = skills.map((data, index) => (
    <div key={index} className="col-6">
      <p className="list-item">
        <FontAwesomeIcon icon={['fa', 'Check', 'Circle']} color="green" />
        <span className="ml-3">{data.name}</span>
      </p>
    </div>
  ));

  return skillsJSX;
};

export default Skills;
