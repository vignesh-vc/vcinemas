import { movies } from "../constants";
import { GET_MOVIES, MY_TICKET } from "./Action.types";

export const INITIAL_STATE = {
  selectedMovies: {},
  selectedTicket: {},
};

export const PostReducer = (state, action) => {
  switch (action.type) {
    case GET_MOVIES:
      let selected = movies.filter((value) => value.id === action.payload);
      return { ...state, selectedMovies: selected };

    case MY_TICKET:
      return { ...state, selectedTicket: action.payload };

    default:
      return state;
  }
};
