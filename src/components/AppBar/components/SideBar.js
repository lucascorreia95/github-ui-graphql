import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  link: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    color: '#757575',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  list: {
    paddingRight: '15px',
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
}));

export default function SideBar({ openDrawer, handleDrawerClose }) {
  const classes = useStyles();

  return (
    <Drawer
      open={openDrawer}
      aria-label="Menu lateral"
    >
      <div className={classes.toolbarIcon}>
        <IconButton
          onClick={handleDrawerClose}
          aria-label="Botão para fechar o menu lateral"
        >
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List className={classes.list}>
        <ListItem button>
          <Link
            className={classes.link}
            component={RouterLink}
            to="/"
            onClick={handleDrawerClose}
            aria-label="Link para a página inicial"
          >
            <ListItemIcon>
              <SearchIcon />
            </ListItemIcon>
            <ListItemText primary="Buscar" />
          </Link>
        </ListItem>
        <ListItem button>
          <Link
            className={classes.link}
            component={RouterLink}
            to="/favorite"
            onClick={handleDrawerClose}
            aria-label="Link para a lista de favoritos"
          >
            <ListItemIcon>
              <FavoriteIcon />
            </ListItemIcon>
            <ListItemText primary="Favoritos" />
          </Link>
        </ListItem>
      </List>
    </Drawer>
  );
}

SideBar.propTypes = {
  openDrawer: PropTypes.bool.isRequired,
  handleDrawerClose: PropTypes.func.isRequired,
};
