import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';

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
}));

function Content() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.container}>
      {arrUser.length > 0
        && (
          arrUser.map((item) => (
            <Query key={item} query={FavoriteQuery} variables={{ login: item }}>
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
          ))
        )}
    </Container>
  );
}

export default Content;
