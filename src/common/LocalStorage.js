export const arrUser = JSON.parse(window.localStorage.getItem('github-graphql/favorite')) || [];

export const handleStore = (user) => {
  if (arrUser.indexOf(user) === -1) {
    arrUser.push(user);
  } else {
    arrUser.splice(arrUser.indexOf(user), 1);
  }

  window.localStorage.setItem('github-graphql/favorite', JSON.stringify(arrUser));
};

export const checkStore = (user) => (arrUser.indexOf(user) !== -1);
