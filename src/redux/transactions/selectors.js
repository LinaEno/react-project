export const selectSummary = state => state.transactions.summary;
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
