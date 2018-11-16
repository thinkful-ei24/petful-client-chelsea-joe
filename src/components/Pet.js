import React from 'react';

const Pet = (props) => {
  return (
    <React.Fragment>
      <header>
        <h2>{props.petToAdopt.name}</h2>
        <img src={props.petToAdopt.imageURL} alt={props.petToAdopt.imageDescription} />
      </header>
      <main>
        <dl>
          <li>{props.petToAdopt.sex}</li>
          <li>{props.petToAdopt.age}</li>
          <li>{props.petToAdopt.breed}</li>
          <li>{props.petToAdopt.story}</li>
        </dl>
        <button onClick={() => props.onAdoptPet()}>Adopt!</button>
      </main>
    </React.Fragment>
  );
};

export default Pet;