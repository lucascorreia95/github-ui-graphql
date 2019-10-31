import React from 'react';
import PropTypes from 'prop-types';
import Collapse from '@material-ui/core/Collapse';
import CardContent from '@material-ui/core/CardContent';

import Repos from './Repos';

export default function CollapseComponent({ item, expanded }) {
  return (
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
        <Repos login={item.login} />
      </CardContent>
    </Collapse>
  );
}

CollapseComponent.propTypes = {
  item: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
  expanded: PropTypes.bool.isRequired,
};
