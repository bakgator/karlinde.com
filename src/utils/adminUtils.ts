export const isAdmin = () => {
  return localStorage.getItem('isAdmin') === 'true';
};

export const setAdmin = (value: boolean) => {
  localStorage.setItem('isAdmin', value.toString());
};