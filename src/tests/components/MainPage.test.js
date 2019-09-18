import React from 'react';
import { shallow } from 'enzyme';
import MainPage from "../../components/MainPage";

test('should render Header correctly', () => {
    const wrapper = shallow(<MainPage />);
    expect(wrapper).toMatchSnapshot();
}); 