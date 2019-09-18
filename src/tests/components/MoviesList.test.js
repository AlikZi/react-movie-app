import React from 'react';
import { shallow } from 'enzyme';
import { MoviesList } from '../../components/MoviesList';
import movies from '../fixtures/movies';

test('Should render MoviesList with given movies', () => {
    const wrapper = shallow(<MoviesList movies={movies} />)
    expect(wrapper).toMatchSnapshot();
});

test('Should render MoviesList without movies', () => {
    const wrapper = shallow(<MoviesList movies={[]} />);
    expect(wrapper).toMatchSnapshot();
})