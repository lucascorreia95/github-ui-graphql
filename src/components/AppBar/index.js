import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
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

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
        aria-label="Caixa de diálogo das informações sobre o Aplicativo"
      >
        <DialogTitle id="max-width-dialog-title">Informações</DialogTitle>
        <DialogContent aria-label="Informações sobre o Aplicativo">
          <DialogContentText>
            Use a aplicação para buscar e favoritar usuários no
            GitHub e visualizar seus respectivos repositórios.
          </DialogContentText>
          <DialogContentText>
            Aplicação desenvolvida com o objetivo de treinar e
            familiarizar com o uso do framework Material-UI, GraphQL e com a Api React Hooks.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            color="primary"
            aria-label="Botão para fechar a caixa de diálogo"
          >
            Fechar
          </Button>
        </DialogActions>
      </Dialog>

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
    </div>
  );
}
