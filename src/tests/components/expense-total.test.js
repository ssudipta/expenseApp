import selectExpensesTotal from '../../components/expense-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
    const res = selectExpensesTotal([]);
    expect(res).toBe(0);
});

test('should return amount for 1 expense', () => {
    const res = selectExpensesTotal([expenses[0]]);
    expect(res).toBe(expenses[0].amount);
});

test('should return amount for multiple expenses', () => {
    const res = selectExpensesTotal(expenses);
    const sum = expenses[0].amount + expenses[1].amount + expenses[2].amount;
    expect(res).toBe(sum);
});