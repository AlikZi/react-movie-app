import React from 'react';
import { shallow } from 'enzyme';
import movieInfo from '../fixtures/movieInfo';
import videos from '../fixtures/videos';
import MovieOverviewPage from '../../components/MovieOverviewPage';

let wrapper;

beforeEach(() => {
    MovieOverviewPage.prototype.componentDidMount = () => { };
    wrapper = shallow(<MovieOverviewPage />);
})

test('Should render MovieOverviewPage without movie info correctly', () => {
    expect(wrapper).toMatchSnapshot();
})

test('Should render MovieOverviewPage with movie info correctly and without videos correctly', () => {
    wrapper.setState({
        movie: movieInfo
    });
    expect(wrapper).toMatchSnapshot();
})

test('Should render MovieOverviewPage with movie info and videos correctly', () => {
    wrapper.setState({
        movie: movieInfo,
        videos: videos
    });
    expect(wrapper).toMatchSnapshot();
})
