import { FETCH_CAT_REQUEST, FETCH_CAT_SUCCESS, FETCH_CAT_ERROR } from "../actions/cat.action";

const initialState = {
  data: null,
  error: null,
  loading: false,
}

const catReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_CAT_REQUEST:
    return Object.assign({}, state, {
      loading: true,
    });
    case FETCH_CAT_SUCCESS:
    return Object.assign({}, state, {
      data: action.cat,
      loading: false,
    })
    case FETCH_CAT_ERROR:
    return Object.assign({}, state, {
      loading: false,
      error: action.error,
    })

    default:
    return state;
  }
}

export default catReducer;