import React from 'react';

const DogToAdopt = () => {
  return (
    <React.Fragment>
      <header>
        <h2>Animal Name</h2>
        <img src="#" alt="description" />
      </header>
      <main>
        <dl>
          <li>Gender</li>
          <li>Age</li>
          <li>Breed</li>
          <li>Story</li>
        </dl>
        <button>Adopt!</button>
      </main>
    </React.Fragment>
  );
};

export default DogToAdopt;
