export const selectCategories = state => state.transactions.categories;
export const selectTransactions = state => state.transactions.transactions;
export const selectPage = state => state.transactions.page;
export const selectPerPage = state => state.transactions.perPage;
export const selectIsLoading = state => state.transactions.isLoading;
export const selectError = state => state.transactions.error;
export const selectTransactionsWithCategories = state => {
  const categories = selectCategories(state);
  return selectTransactions(state).map(transaction => ({
    ...transaction,
    category: categories.find(c => c.id === transaction.categoryId),
  }));
};

export const selectSummary = state => state.transactions.categoriesSummary;
export const selectExpenseSum = state => state.transactions.expenseSummary;
export const selectIncomeSum = state => state.transactions.incomeSummary;
export const selectPeriodTotal = state => state.transactions.periodTotal;
export const selectFilteredValue = state => state.transactions.filteredValue;

export const selectFilteredTransactions = state => {
  const transactions = selectTransactions(state);
  const filteredValues = selectFilteredValue(state);
  let sortedTransactions = [...transactions];

  if (filteredValues) {
    Object.keys(filteredValues).forEach(property => {
      const value = filteredValues[property];
      if (property === 'transactionDate' && value !== '') {
        sortedTransactions = sortedTransactions.filter(
          transaction =>
            new Date(transaction[property]).getMonth() ===
            Number(filteredValues[property])
        );
      }

      if (property === 'comment' && value) {
        sortedTransactions = sortedTransactions.filter(transaction =>
          transaction[property]
            .toLowerCase()
            .trim()
            .includes(filteredValues[property].toLowerCase().trim())
        );
      }

      if (property === 'amount' && value) {
        if (filteredValues[property] === 'low') {
          sortedTransactions = sortedTransactions.sort(
            (prevTransaction, nextTransaction) =>
              prevTransaction[property] - nextTransaction[property]
          );
        } else if (filteredValues[property] === 'high') {
          sortedTransactions = sortedTransactions.sort(
            (prevTransaction, nextTransaction) =>
              nextTransaction[property] - prevTransaction[property]
          );
        }
      }

      if ((property === 'type' || property === 'categoryId') && value) {
        sortedTransactions = sortedTransactions.filter(
          transaction => transaction[property] === filteredValues[property]
        );
      }
    });
  }
  return sortedTransactions;
};
