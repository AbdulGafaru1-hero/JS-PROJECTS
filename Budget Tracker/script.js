const incomeInput = document.getElementById('income');
const expenseInput = document.getElementById('expense');
const transactionList = document.getElementById('transaction-list');
const balanceAmount = document.getElementById('balance-amount');

let balance = 0;

function addTransaction() {
    const income = parseFloat(incomeInput.value);
    const expense = parseFloat(expenseInput.value);

    if (isNaN(income) || isNaN(expense)) {
        alert('Please enter valid numbers for income and expense.');
        return;
    }

    balance += (income - expense);
    updateBalance();
    updateTransactionList(income, expense);

    incomeInput.value = '';
    expenseInput.value = '';
}

function updateTransactionList(income, expense) {
    const listItem = document.createElement('li');
    listItem.textContent = `Income: ${income.toFixed(2)}, Expense: ${expense.toFixed(2)}`;
    transactionList.appendChild(listItem);
}

function updateBalance() {
    balanceAmount.textContent = balance.toFixed(2);
}
