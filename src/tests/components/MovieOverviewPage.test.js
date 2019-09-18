import React from 'react';
import { shallow } from 'enzyme';
import MovieOverviewPage from '../../components/MovieOverviewPage';

let fetch, wrapper;

beforeEach(() => {
    fetch = jest.fn();
    wrapper = shallow(<MovieOverviewPage fetch={fetch} match={{params: {id: 320288}} }/>);
})

test('Should render MovieCard correctly', () => {
    expect(wrapper).toMatchSnapshot();
});
