import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Header from './components/Header';
import SideBar from './components/SideBar';
import Info from './components/Info';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
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
      <Header handleDrawerOpen={handleDrawerOpen} handleClickOpen={handleClickOpen} />
      <Info handleClose={handleClose} open={open} />
      <SideBar handleDrawerClose={handleDrawerClose} openDrawer={openDrawer} />
    </div>
  );
}
