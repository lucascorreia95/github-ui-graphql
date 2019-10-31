import React from 'react';
import PropTypes from 'prop-types';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

export default function Actions({ item, handleExpandClick }) {
  return (
    <CardActions>
      <Button
        variant="contained"
        color="primary"
        size="small"
        onClick={handleExpandClick}
        aria-label={`Buscar Repositórios de ${item.login}`}
      >
        Repositórios
      </Button>
    </CardActions>
  );
}

Actions.propTypes = {
  item: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
  handleExpandClick: PropTypes.func.isRequired,
};
