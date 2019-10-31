import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

export default function Content({ item }) {
  return (
    <CardContent aria-label={`Biografia do usuário ${item.login}`}>
      <Typography variant="body2" color="textSecondary" component="p">
        {item.bio}
      </Typography>
    </CardContent>
  );
}

Content.propTypes = {
  item: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
};
