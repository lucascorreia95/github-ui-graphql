import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  media: {
    height: 0,
    paddingTop: '36.25%',
  },
});

export default function Media({ item }) {
  const classes = useStyles();

  return (
    <CardMedia
      className={classes.media}
      image={item.avatarUrl}
      title={item.name}
      aria-label={`Imagem do usuário ${item.login}`}
    />
  );
}

Media.propTypes = {
  item: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
};
