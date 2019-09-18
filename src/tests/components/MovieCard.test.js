import React from 'react';
import { shallow } from 'enzyme';
import movies from '../fixtures/movies';
import MovieCard from '../../components/MovieCard';

test('Should render MovieCard correctly', () => {
    const wrapper = shallow(<MovieCard movie={movies[0]} />);
    expect(wrapper).toMatchSnapshot();
});
