import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import { ApolloConsumer } from 'react-apollo';

import { SearchQuery } from '../../Services/graphql';

import { Cards } from '../Cards';

const useStyles = makeStyles((theme) => ({
  container: {
    margin: '15px auto',
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
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
  const [cards, setCards] = useState();
  const [loading, setLoading] = useState(false);
  const classes = useStyles();

  async function handleSubmit(event, client) {
    event.preventDefault();
    setCards(null);
    setLoading(true);
    const data = await client.query({ query: SearchQuery, variables: { queryUser: user } });
    setCards(data);
    setLoading(false);
  }

  return (
    <Container maxWidth="sm" className={classes.container}>
      <ApolloConsumer>
        {(client) => (
          <>
            <form onSubmit={(event) => handleSubmit(event, client)}>
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
            {loading
              && (
              <Box component="div" className={classes.box}>
                <CircularProgress />
              </Box>
              )}
            {cards
              && (
                <Cards data={cards} />
              )}
          </>
        )}
      </ApolloConsumer>
    </Container>
  );
}

export default Content;
