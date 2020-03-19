export const setLStorage = (key: string, value: string) => {
  localStorage.setItem(key, value);
  return true;
};

export const getLStorage = (key: string) => {
  return localStorage.getItem(key);
};
