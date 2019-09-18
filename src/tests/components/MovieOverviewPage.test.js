import React from 'react';
import { shallow } from 'enzyme';
import MovieOverviewPage from '../../components/MovieOverviewPage';

test('Should render MovieCard correctly', () => {
    const wrapper = shallow(<MovieOverviewPage match={{params: {id: 320288}} }/>);
    expect(wrapper).toMatchSnapshot();
});
