const store = {
  'github-graphql/favorite': ['lucascorreia95'],
};

const localStorageMock = {
  getItem(key) {
    return JSON.stringify(store[key]);
  },
  setItem(key) {
    return key;
  },
};
Object.defineProperty(window, 'localStorage', { value: localStorageMock });
