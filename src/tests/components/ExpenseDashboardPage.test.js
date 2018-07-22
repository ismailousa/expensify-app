import React from 'react';
import {shallow} from 'enzyme';
import DashboardPage from '../../components/ExpenseDashboardPage';

test('Should render Dashboard', () => {
    const wrapper = shallow(<DashboardPage />);
    expect(wrapper).toMatchSnapshot();
});