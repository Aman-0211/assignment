import {
  GET_MOVIES_LIST,
  GET_MOVIES_LIST_REQUEST,
  GET_MOVIES_LIST_FAILER,
} from "../constant";

export const initialState = {
  isLoading: false,
  isErrored: false,
  data: [],
};

export function reducer(state, action) {
  switch (action.type) {
    case GET_MOVIES_LIST_REQUEST:
      return {
        ...state,
        isLoading: true,
        isErrored: false,
      };

    case GET_MOVIES_LIST:
      console.log("Action", action);

      return {
        ...state,
        isLoading: false,
        data: action.data.Search,
        value: action.value,
      };

    case GET_MOVIES_LIST_FAILER:
      return {
        ...state,
        isErrored: true,
        isLoading: false,
      };
  }
}
