import { GET_CHARS, SEARCH_CHARS } from "./actions";

const initialState = {
  chars: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_CHARS:
      return {
        ...state,
        chars: payload,
      };

    case SEARCH_CHARS:
      return { ...state, chars: payload };

    default:
      return state;
  }
};

export default reducer;
