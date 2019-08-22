import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpLink = new HttpLink({
  uri: 'https://api.github.com/graphql',
  headers: { 'Authorization:': 'bearer d2f092483f691099f3e6bbb8aaff35b4e4ccb271' },
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
