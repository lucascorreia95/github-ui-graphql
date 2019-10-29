import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
  },
}));

export default function Header({ handleDrawerOpen, handleClickOpen }) {
  const classes = useStyles();

  return (
    <AppBar
      position="fixed"
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="Abrir menu lateral"
          onClick={handleDrawerOpen}
          edge="start"
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="h1"
          className={classes.title}
          aria-label="Título do Aplicativo"
        >
          GitHub - Material-UI
        </Typography>
        <IconButton
          color="inherit"
          onClick={handleClickOpen}
          aria-label="Abrir informações sobre o Aplicativo"
        >
          <HelpOutlineIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  handleDrawerOpen: PropTypes.func.isRequired,
  handleClickOpen: PropTypes.func.isRequired,
};
