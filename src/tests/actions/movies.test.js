import { addMovies } from "../../actions/movies";

test('Should setup add movies action object', () => {
    const action = addMovies({title: 'God Father'});
    expect(action).toEqual({
        type: "ADD_MOVIES",
        movies: {title: 'God Father'}
    })
});
