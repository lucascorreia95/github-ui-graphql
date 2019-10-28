import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { Query } from 'react-apollo';
import { FavoriteQuery } from '../../Services/graphql';
import { arrUser } from '../../common/LocalStorage';
import SingleCard from '../Cards/SingleCard';

const useStyles = makeStyles((theme) => ({
  container: {
    margin: '15px auto',
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  typography: {
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.54)',
  },
}));

function Content() {
  const classes = useStyles();
  return (
    <Container maxWidth="md" className={classes.container}>
      <Typography className={classes.typography} variant="h6" component="h1">
        Favoritos
      </Typography>
      <Grid container spacing={2}>
        {arrUser.length > 0
          && (
            arrUser.map((item) => (
              <Grid key={item} item xs={12} sm={6} md={4}>
                <Query query={FavoriteQuery} variables={{ login: item }}>
                  {({ loading, error, data }) => {
                    if (loading) {
                      return (
                        <Box component="div">
                          <CircularProgress />
                        </Box>
                      );
                    }

                    if (error) return `Error! ${error.message}`;

                    return (
                      <SingleCard item={data.user} />
                    );
                  }}
                </Query>
              </Grid>
            ))
          )}
      </Grid>
    </Container>
  );
}

export default Content;
