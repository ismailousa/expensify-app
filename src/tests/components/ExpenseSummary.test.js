import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';

test('Should render correctly for 1 expenses', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={1} expensesTotal={255} />);
    expect(wrapper).toMatchSnapshot();
});

test('Should render correctly for multiple expenses', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={5} expensesTotal={255600}/>);
    expect(wrapper).toMatchSnapshot();
});