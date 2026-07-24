export const saveToken = (token, name) => {
  localStorage.setItem("token", token);
  localStorage.setItem("name", name);
};

export const getToken = () => localStorage.getItem("token");
export const getName = () => localStorage.getItem("name");

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("name");
};

export const isLoggedIn = () => !!getToken();