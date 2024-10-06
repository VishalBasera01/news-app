// newsReducer.js
import {
  FETCH_NEWS,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_FAILURE,
} from "./newsAction";

const initialState = {
  news: [],
  isLoading: false,
  error: null,
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NEWS:
      return { ...state, isLoading: true };
    case FETCH_NEWS_SUCCESS:
      return { ...state, isLoading: false, news: action.payload };
    case FETCH_NEWS_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};

export default newsReducer;
