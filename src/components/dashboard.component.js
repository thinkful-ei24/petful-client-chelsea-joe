import React from 'react';
import { connect } from 'react-redux';

import Pet from './pet.component';
// import { fetchCat, adoptCat } from '../actions/cat.action';
// import { fetchDog, adopt } from '../actions/dog.action';
import petActions from '../actions/index.action';

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(petActions.fetchCat());
    this.props.dispatch(petActions.fetchDog());
  }

  render() {
    return (
      <section>
        <h1>Adopt an animal</h1>
        <h2>Cat</h2>
        <Pet
          petToAdopt={this.props.catToAdopt}
          onAdoptPet={() => this.props.dispatch(petActions.adoptCat())}
        />
        <h2>Dog</h2>
        <Pet
          petToAdopt={this.props.dogToAdopt}
          onAdoptPet={() => this.props.dispatch(petActions.adoptDog())}
        />
      </section>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    catToAdopt: state.cat.data,
    dogToAdopt: state.dog.data
  };
};

export default connect(mapStateToProps)(Dashboard);
