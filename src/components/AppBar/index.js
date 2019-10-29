import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import SideBar from './components/SideBar';
import Info from './components/Info';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
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
  menuButton: {
    marginRight: 36,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  function handleDrawerOpen() {
    setOpenDrawer(true);
  }

  function handleDrawerClose() {
    setOpenDrawer(false);
  }

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div className={classes.root}>
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
      <Info handleClose={handleClose} open={open} />
      <SideBar handleDrawerClose={handleDrawerClose} openDrawer={openDrawer} />
    </div>
  );
}
