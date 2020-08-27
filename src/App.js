import React, { Component } from 'react';
import Landing from './Components/Landing';
import profileData from './profileData.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      landingData: profileData.landing,
      experience: profileData.experience,
      education: profileData.education,
      skills: profileData.skills,
      interests: profileData.interests,
      awards: profileData.awards,
    };
  }
  render() {
    return (
      <div className="App">
        <Landing></Landing>
      </div>
    );
  }
}

export default App;
