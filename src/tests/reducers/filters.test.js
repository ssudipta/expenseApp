import filterReducer from '../../reducers/filters';
import moment from 'moment';

test('should set up default filter values', () => {
    const state = filterReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
}); 

test('should set sort by amount', () => {
    const state = filterReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toEqual('amount');
}); 

test('should set sort by date', () => {
    const currentState = {
        text : '',
        sortBy : 'amount',
        startDate : undefined,
        endDate : undefined
    };
    const action = {type: 'SORT_BY_DATE'};
    const state = filterReducer(currentState, action);
    expect(state.sortBy).toEqual('date');
});

test('should set text filter', () => {
    const action = {
        type: 'SET_TEXT_FILTER',
        text: 'Rent'
    }
    const state = filterReducer(undefined, action);
    expect(state.text).toEqual('Rent');
});

test('should set start date', () => {
    const startDate = moment();
    const action = {
        type: 'SET_START_DATE',
        startDate
    }
    const state = filterReducer(undefined, action);
    expect(state.startDate).toEqual(startDate); 
});

test('should set end date', () => {
    const endDate = moment();
    const action = {
        type: 'SET_END_DATE',
        endDate
    }
    const state = filterReducer(undefined, action);
    expect(state.endDate).toEqual(endDate); 
});