export const FETCH_CAT_REQUEST = 'FETCH_CAT_REQUEST';
export const fetchCatRequest = () => {
  return {
    type: FETCH_CAT_REQUEST
  };
};

export const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS';
export const fetchCatSuccess = cat => {
  return {
    type: FETCH_CAT_SUCCESS,
    cat
  };
};

export const FETCH_CAT_ERROR = 'FETCH_CAT_ERROR';
export const fetchCatError = error => {
  return {
    type: FETCH_CAT_ERROR,
    error
  };
};

//async fetch cat function
export const fetchCat = () => dispatch => {
  dispatch(fetchCatRequest());
  fetch('http://localhost:8080/api/cat', {
    method: 'GET',
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(res => dispatch(fetchCatSuccess(res)))
    .catch(err => dispatch(fetchCatError(err)));
};

//async delete cat function
export const adoptCat = () => dispatch => {
  fetch('http://localhost:8080/api/cat', {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(() => dispatch(fetchCat()))
    .catch(err => dispatch(fetchCatError(err)));
};
