export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const getUserName = state => state.auth.user.username;

export const userData = state => state.auth.user;

export const selectUserBalance = state => userData(state).balance;

export const selectRefreshed = state => state.auth.isRefreshing;

export const selectToken = state => state.auth.token;
