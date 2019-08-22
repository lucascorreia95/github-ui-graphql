/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
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

export default function Repos(props) {
  return (
    <List>
      {props.repos.length > 0
        && props.repos.map((repo) => (
          <ListItem key={repo.id}>
            <ListItemAvatar>
              <Avatar>
                <FolderIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={repo.name} />
            <ListItemSecondaryAction>
              <Link href={repo.html_url}>
                <IconButton edge="end" aria-label="link">
                  <LinkIcon />
                </IconButton>
              </Link>
            </ListItemSecondaryAction>
          </ListItem>
        ))}

      {props.empty && !props.loading
        && (
        <ListItem>
          <ListItemText primary="Nenhum repositório encontrado!" />
        </ListItem>
        )}
    </List>
  );
}
