import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import { withApollo } from 'react-apollo';

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
  erro: {
    textAlign: 'center',
    padding: '15px',
    display: 'block',
  },
}));

function Content({ client }) {
  const [user, setUser] = useState('');
  const [cards, setCards] = useState();
  const [erro, setErro] = useState(false);
  const [loading, setLoading] = useState(false);
  const classes = useStyles();

  async function handleSubmit(event) {
    event.preventDefault();
    setCards(null);
    setErro(false);
    setLoading(true);
    await client.query({ query: SearchQuery, variables: { queryUser: user } })
      .then(({ data }) => {
        setCards(data);
      })
      .catch(() => {
        setErro(true);
      });
    setLoading(false);
  }

  return (
    <Container maxWidth="sm" className={classes.container} data-testid="container">
      <form onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          inputProps={{ 'data-testid': 'form-field' }}
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
          data-testid="form-button"
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
      {erro
        && (
          <Typography
            className={classes.erro}
            aria-label="Mensagem de erro"
          >
            Desculpe, mas algo deu errado ):
          </Typography>
        )}
    </Container>
  );
}

export default withApollo(Content);
