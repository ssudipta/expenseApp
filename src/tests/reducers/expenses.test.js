import expenseReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should set default state', () => {
    const state = expenseReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should add expense', () => {
    const expense = {
        description: '',
        note: '',
        amount: 35.00,
        createdAt: moment()
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expenseReducer(expenses, action);
    expect(state).toEqual([
        ...expenses,
        expense
    ]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expenseReducer(expenses, action);
    expect(state).toEqual([expenses[0],expenses[2]]);
});

test('should not remove expense by id if not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '4'
    }
    const state = expenseReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[1], expenses[2]]);
});

test('should edit expense by id', () => {
    const updates = {
        id: '1',
        description: 'Gum',
        note: 'Updated',
        amount: 20,
        createdAt: 0           
    };
    const action= {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates
    };
    const state = expenseReducer(expenses, action);
    expect(state[0]).toEqual({...updates});  
});

test('should not edit expense by id if not found', () => {
    const updates = {
        amount: '1000'         
    };
    const action= {
        type: 'EDIT_EXPENSE',
        id: '4',
        updates
    };
    const state = expenseReducer(expenses, action);
    expect(state).toEqual(expenses);  
});

