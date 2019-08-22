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
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import LinkIcon from '@material-ui/icons/Link';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';

import api from '../../Services/api';
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
  const [repos, setRepos] = useState([]);
  const [empty, setEmpty] = useState(true);
  const [loading, setLoading] = useState(false);

  async function handleExpandClick() {
    setExpanded(!expanded);

    if (!repos.length) {
      setLoading(true);
      const response = await api.get(`users/${props.item.login}/repos`);
      setEmpty(!(response.data.length > 0));
      setRepos(response.data);
      setLoading(false);
    }
  }

  const { item } = props;

  return (
    <Card key={item.id} className={classes.card}>
      <CardHeader
        avatar={<Avatar aria-label="recipe" alt={props.item.login} src={props.item.avatar_url} />}
        title={props.item.login}
        subheader={`Score: ${props.item.score}`}
        action={(
          <Link href={props.item.html_url}>
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
          <Repos repos={repos} empty={empty} loading={loading} />

          {loading
            && (
            <Box component="div" className={classes.box}>
              <CircularProgress />
            </Box>
            )}
        </CardContent>
      </Collapse>
    </Card>
  );
}
