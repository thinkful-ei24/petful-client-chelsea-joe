import React from 'react';

import CatToAdopt from './catToAdopt.component';
import DogToAdopt from './dogToAdopt.component';

class Dashboard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Adopt an animal</h1>
        <h2>Cat</h2>
        <CatToAdopt />
        <h2>Dog</h2>
        <DogToAdopt />
      </React.Fragment>
    );
  }
}

export default Dashboard;
