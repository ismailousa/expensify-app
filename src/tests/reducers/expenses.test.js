import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('Shoud set up default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT'});
    expect(state).toEqual([]);
});

test('Shoud remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('Shoud not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: -1
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('Shoud add an expense', () => {
    const expense = {
        id: '505',
        description: 'test',
        note: '',
        amount: 1950,
        createdAt: 1000
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('Shoud edit an expense by id', () => {
    const updates = {
        note: 'new note'
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates
    };
    const state = expensesReducer(expenses, action);
    expect(state[0].note).toBe(updates.note);
});

test('Shoud not edit an expense if id not found', () => {
    const updates = {
        description: 'test',
        note: 'new note'
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: -1,
        updates
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});