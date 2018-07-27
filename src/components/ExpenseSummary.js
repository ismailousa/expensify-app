import React from 'react';
import selectVisibleExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import { connect } from 'react-redux';
import numeral from 'numeral';

export const ExpenseSummary = ({expenseCount, expensesTotal}) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    return (
    <div>
        <p>Viewing {expenseCount} {expenseWord} totalling {numeral(expensesTotal / 100).format('$0,0.00')}</p>
    </div>
    )
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectVisibleExpenses(state.expenses, state.filters);
    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpenseSummary);

