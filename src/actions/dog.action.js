import API_BASE_URL from '../config';

export const FETCH_DOG_REQUEST = 'FETCH_DOG_REQUEST';
export const fetchDogRequest = () => {
  return {
    type: FETCH_DOG_REQUEST
  };
};

export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS';
export const fetchDogSuccess = dog => {
  return {
    type: FETCH_DOG_SUCCESS,
    dog
  };
};

export const FETCH_DOG_ERROR = 'FETCH_DOG_ERROR';
export const fetchDogError = error => {
  return {
    type: FETCH_DOG_ERROR,
    error
  };
};

//async fetch dog function
export const fetchDog = () => dispatch => {
  dispatch(fetchDogRequest());
  fetch(`${API_BASE_URL}/api/dog`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(res => dispatch(fetchDogSuccess(res)))
    .catch(err => dispatch(fetchDogError(err)));
};

//async delete dog function
export const adoptDog = () => dispatch => {
  fetch(`${API_BASE_URL}/api/dog`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(() => dispatch(fetchDog()))
    .catch(err => dispatch(fetchDogError(err)));
};
