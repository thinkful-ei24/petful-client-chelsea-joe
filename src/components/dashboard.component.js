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
      <React.Fragment>
        <section className="banner-container">
          <main className="banner" role="main">
            <div className="pup-animation" alt="an animated puppy">
              <div class="dog">
                <div class="dog-body">
                  <div class="dog-tail">
                    <div class="dog-tail">
                      <div class="dog-tail">
                        <div class="dog-tail">
                          <div class="dog-tail">
                            <div class="dog-tail">
                              <div class="dog-tail">
                                <div class="dog-tail" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="dog-torso" />
                <div class="dog-head">
                  <div class="dog-ears">
                    <div class="dog-ear" />
                    <div class="dog-ear" />
                  </div>
                  <div class="dog-eyes">
                    <div class="dog-eye" />
                    <div class="dog-eye" />
                  </div>
                  <div class="dog-muzzle">
                    <div class="dog-tongue" />
                  </div>
                </div>
              </div>
            </div>
            <div className="banner-copy">
              <h1>Petdrop, adopt a cutie!</h1>
              <p>
                All of these babies need homes. Below are different cats and dogs in need of homes, all across the United States!
              </p>
            </div>
          </main>
        </section>
        <section className="pet-container">
          <div className="cat-box">
            <h2>This kitty is all yours</h2>
            <Pet
              petToAdopt={this.props.catToAdopt}
              onAdoptPet={() => this.props.dispatch(petActions.adoptCat())}
            />
          </div>
          <div className="dog-box">
            <h2>This is your Doggo</h2>
            <Pet
              petToAdopt={this.props.dogToAdopt}
              onAdoptPet={() => this.props.dispatch(petActions.adoptDog())}
            />
          </div>
        </section>
      </React.Fragment>
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
