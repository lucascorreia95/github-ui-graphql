/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import Collapse from '@material-ui/core/Collapse';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import LinkIcon from '@material-ui/icons/Link';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';

import Repos from './Repos';
import { handleStore, checkStore } from './LocalStorage';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    margin: '15px 0',
  },
  box: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '15px 0',
  },
  media: {
    height: 0,
    paddingTop: '36.25%',
  },
});

export default function SingleCard(props) {
  const classes = useStyles();

  const [expanded, setExpanded] = useState(false);
  const [update, setUpdate] = useState(false);

  async function handleExpandClick() {
    setExpanded(!expanded);
  }

  function handleStoreClick(user) {
    setUpdate(!update);
    handleStore(user);
  }

  return (
    <Card key={props.item.id} className={classes.card}>
      <CardHeader
        avatar={(
          <Avatar aria-label="recipe">
            {props.item.name
              && (
                props.item.name.charAt(0)
              )}
          </Avatar>
        )}
        title={props.item.name}
        subheader={props.item.login}
        action={(
          <>
            <Link href={props.item.url}>
              <IconButton aria-label="Link">
                <LinkIcon />
              </IconButton>
            </Link>
            <IconButton aria-label="Favorite" onClick={() => handleStoreClick(props.item.login)} color={checkStore(props.item.login) ? 'secondary' : 'default'}>
              <FavoriteIcon />
            </IconButton>
          </>
        )}
      />
      <CardMedia
        className={classes.media}
        image={props.item.avatarUrl}
        title={props.item.name}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.item.bio}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary" size="small" onClick={handleExpandClick}>Repositórios</Button>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Repos login={props.item.login} />
        </CardContent>
      </Collapse>
    </Card>
  );
}
