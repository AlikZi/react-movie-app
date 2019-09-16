import moviesReducer from "../reducers/movies"; 

test("should setup default state", () => {
    const state = moviesReducer(undefined, {type: "@@INIT"});
    expect(state).toEqual([]);
});

test("should add movies", () => {
    const action = {type: "ADD_MOVIES", movies: [{title: "God Father"}]};
    const state = moviesReducer(undefined, action);
    expect(state).toEqual([{title: "God Father"}]);
});