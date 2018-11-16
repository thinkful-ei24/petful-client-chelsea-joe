import { FETCH_DOG_REQUEST, FETCH_DOG_SUCCESS, FETCH_DOG_ERROR } from "../actions/dog.action";

const initialState = {
  data: null,
  error: null,
  loading: false,
}

const dogReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_DOG_REQUEST:
    return Object.assign({}, state, {
      loading: true,
    });
    case FETCH_DOG_SUCCESS:
    return Object.assign({}, state, {
      data: action.dog,
      loading: false,
    })
    case FETCH_DOG_ERROR:
    return Object.assign({}, state, {
      loading: false,
      error: action.error,
    })

    default:
    return state;
  }
}

export default dogReducer;