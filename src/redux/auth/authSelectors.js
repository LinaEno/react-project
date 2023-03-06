export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const getUserName = state => state.auth.user.name;

export const userData = state => state.auth.user;

export const selectRefreshed = state => state.auth.isRefreshing;
