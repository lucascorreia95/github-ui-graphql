import React from 'react';
import PropTypes from 'prop-types';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import LinkIcon from '@material-ui/icons/Link';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';

export default function Header({ item, handleStoreClick, checkStore }) {
  return (
    <CardHeader
      avatar={(
        <Avatar aria-label={`Avatar de ${item.name}`}>
          {item.name
            && (
              item.name.charAt(0)
            )}
        </Avatar>
      )}
      title={item.name}
      subheader={item.login}
      action={(
        <>
          <Link href={item.url} aria-label={`Link para o GitHub de ${item.name}`}>
            <IconButton aria-label="Link">
              <LinkIcon />
            </IconButton>
          </Link>
          <IconButton
            aria-label={`Icone para favoritar ${item.name}`}
            onClick={() => handleStoreClick(item.login)}
            color={checkStore(item.login) ? 'secondary' : 'default'}
          >
            <FavoriteIcon />
          </IconButton>
        </>
      )}
    />
  );
}

Header.propTypes = {
  item: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
  handleStoreClick: PropTypes.func.isRequired,
  checkStore: PropTypes.func.isRequired,
};
