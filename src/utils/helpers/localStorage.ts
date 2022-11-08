export const LocalStorage = {
  setAuthToken: (token: string) => localStorage.setItem('dev-it-auth-token', token),
  getAuthToken: () => localStorage.getItem('dev-it-auth-token') as string,
  deleteAuthToken: () => localStorage.removeItem('dev-it-auth-token'),
}
