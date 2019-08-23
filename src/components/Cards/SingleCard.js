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
import LinkIcon from '@material-ui/icons/Link';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';

import Repos from './Repos';

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
});

export default function SingleCard(props) {
  const classes = useStyles();

  const [expanded, setExpanded] = useState(false);

  async function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <Card key={props.item.id} className={classes.card}>
      <CardHeader
        avatar={<Avatar aria-label="recipe" alt={props.item.login} src={props.item.avatarUrl} />}
        title={props.item.name}
        subheader={props.item.login}
        action={(
          <Link href={props.item.url}>
            <IconButton aria-label="settings">
              <LinkIcon />
            </IconButton>
          </Link>
        )}
      />
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
