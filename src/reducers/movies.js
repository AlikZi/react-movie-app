const moviesReducerDefaultState = [];

export default (state = moviesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_MOVIES' :
            return [
                ...state,
                ...action.movies
            ];
        default:
            return state;
    }
}