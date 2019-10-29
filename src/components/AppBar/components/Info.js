import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

export default function Info({ open, handleClose }) {
  return (
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
  );
}
