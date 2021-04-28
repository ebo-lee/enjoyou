import { SEARCH_MOVIE, FETCH_MOVIES } from '../actions/actionTypes';

const initialState = {
    text: '',
    movies: []
}

export default function(state = initialState, action) {
    switch (action.type) {
        case SEARCH_MOVIE:
            return { ...state, text: action.payload }
        case FETCH_MOVIES:
            return { ...state, movies: action.payload }
        default:
            return state;
    }
}