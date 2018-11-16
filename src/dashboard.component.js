import React from 'react';

import Pet from './components/Pet';

class Dashboard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Adopt an animal</h1>
        <h2>Cat</h2>
        <Pet petToAdopt={this.props.catToAdopt} onAdoptPet={() => console.log('adopting pet')}/>
        <h2>Dog</h2>
        <Pet petToAdopt={this.props.dogToAdopt} onAdoptPet={() => console.log('adopting pet')}/>
      </React.Fragment>
    );
  }
}

export default Dashboard;
