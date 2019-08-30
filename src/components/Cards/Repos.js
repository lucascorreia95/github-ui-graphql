import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FolderIcon from '@material-ui/icons/Folder';
import LinkIcon from '@material-ui/icons/Link';
import Link from '@material-ui/core/Link';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';

import { Query } from 'react-apollo';

import { SearchRepoQuery } from '../../Services/graphql';

export default function Repos({ login }) {
  return (
    <Query query={SearchRepoQuery} variables={{ login }}>
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
          <List>
            {data.user.repositories.nodes.map((repo) => (
              <ListItem key={repo.id}>
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={repo.name} />
                <ListItemSecondaryAction>
                  <Link href={repo.url}>
                    <IconButton edge="end" aria-label="link">
                      <LinkIcon />
                    </IconButton>
                  </Link>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        );
      }}
    </Query>
  );
}

Repos.propTypes = {
  login: PropTypes.string.isRequired,
};
