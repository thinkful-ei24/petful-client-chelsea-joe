import React from 'react';

const Pet = props => {
  if (!props.petToAdopt) {
    return <h3>No data yet!</h3>;
  }
  return (
    <section aria-live="polite">
      <header role="banner">
        <h2>{props.petToAdopt.name}</h2>
        <img
          src={props.petToAdopt.imageURL}
          alt={props.petToAdopt.imageDescription}
        />
      </header>
      <main role="main">
        <dl>
          <li>{props.petToAdopt.sex}</li>
          <li>{props.petToAdopt.age}</li>
          <li>{props.petToAdopt.breed}</li>
          <li>{props.petToAdopt.story}</li>
        </dl>
        <button onClick={() => props.onAdoptPet()}>Adopt!</button>
      </main>
    </section>
  );
};

export default Pet;
