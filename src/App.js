import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ApolloProvider } from 'react-apollo';

import AppBar from './components/AppBar';
import Content from './components/Content';
import apolloClient from './Services/apollo';

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <CssBaseline />
      <AppBar />
      <Content />
    </ApolloProvider>
  );
}

export default App;
