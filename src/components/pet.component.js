import React from 'react';

const Pet = props => {
  if (!props.petToAdopt) {
    return <h3>No data yet!</h3>;
  }
  return (
    <div className="pet-info" aria-live="polite">
      <header role="banner">
        <h3>{props.petToAdopt.name}</h3>
        <img
          src={props.petToAdopt.imageURL}
          alt={props.petToAdopt.imageDescription}
        />
      </header>
      <main role="main">
        <dl>
          <li>
            <span>Sex:</span> {props.petToAdopt.sex}
          </li>
          <li>
            <span>Age:</span> {props.petToAdopt.age}
          </li>
          <li>
            <span>Breed:</span> {props.petToAdopt.breed}
          </li>
          <li>
            <span>Story:</span> {props.petToAdopt.story}
          </li>
        </dl>
        <button onClick={() => props.onAdoptPet()}>Adopt!</button>
      </main>
    </div>
  );
};

export default Pet;
