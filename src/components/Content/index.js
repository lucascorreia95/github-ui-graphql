import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import Cards from '../Cards';

// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles((theme) => ({
  container: {
    margin: '15px auto',
  },
  box: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '15px 0',
  },
}));

function Content() {
  const [user, setUser] = useState('');
  const [info, setInfor] = useState(false);
  const classes = useStyles();

  async function handleSubmit(event) {
    event.preventDefault();
    setInfor(true);
  }

  const SearchQuery = gql`
    query search($queryUser: String!){
      search(query: $queryUser, type: USER, first: 5) {
        userCount
        edges{
          node{
            __typename
            ... on User {
              name
              login
              id
              avatarUrl
              url
            }
          }
        }
      }
    }
  `;

  return (

    <Container maxWidth="sm" className={classes.container}>
      <form onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="user"
          label="Usuário"
          name="user"
          autoComplete="user"
          autoFocus
          onChange={(event) => setUser(event.target.value)}
          value={user}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Buscar
        </Button>
      </form>

      {info
        && (
          <Query query={SearchQuery} variables={{ queryUser: user }}>

            {({ loading, error, data }) => {
              if (loading) {
                return (
                  <Box component="div" className={classes.box}>
                    <CircularProgress />
                  </Box>
                );
              }

              if (error) {
                console.log(error);
                return (<span>Desculpe, algo deu errado ):</span>);
              }

              return (
                <Cards data={data} />
              );
            }}
          </Query>
        )}
    </Container>
  );
}

export default Content;
