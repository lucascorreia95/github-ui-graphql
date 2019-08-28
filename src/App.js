import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter } from 'react-router-dom';

import AppBar from './components/AppBar';
import apolloClient from './Services/apollo';
import { Routes } from './routes';

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <CssBaseline />
      <BrowserRouter>
        <AppBar />
        <Routes />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
