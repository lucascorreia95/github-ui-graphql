import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import Header from './Header';
import Media from './Media';
import Content from './Content';
import Actions from './Actions';
import Collapse from './Collapse';

import { handleStore, checkStore } from '../../../common/LocalStorage';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    margin: '15px 0',
  },
});

export default function SingleCard({ item }) {
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
    <Card key={item.id} className={classes.card} data-testid="cards">
      <Header handleStoreClick={handleStoreClick} item={item} checkStore={checkStore} />
      <Media item={item} />
      <Content item={item} />
      <Actions item={item} handleExpandClick={handleExpandClick} />
      <Collapse item={item} expanded={expanded} />
    </Card>
  );
}

SingleCard.propTypes = {
  item: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
};
