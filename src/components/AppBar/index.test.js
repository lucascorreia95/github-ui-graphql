import React from 'react';

import { fireEvent, render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import AppBar from './index';

function renderWithRouter(
  ui,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {},
) {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    history,
  };
}

function createCompomnent(props = {}) {
  const defaultProps = {
    ...props,
  };

  return render(
    <AppBar {...defaultProps} />
  );
}

const menuButtonLabel = 'Abrir menu lateral';
const titleLabel = 'Título do Aplicativo';
const infoLabel = 'Abrir informações sobre o Aplicativo';
const menuButtonCloseLabel = 'Botão para fechar o menu lateral';

describe('Tests for AppBar component', () => {
  it('Should render component', () => {
    const { container } = createCompomnent();
    expect(container.firstChild).toBeDefined();
  });

  it('Should have the basics items of the component', () => {
    const { getByLabelText } = createCompomnent();
    const menuButton = getByLabelText(menuButtonLabel);
    expect(menuButton).toBeDefined();
    const titleApp = getByLabelText(titleLabel);
    expect(titleApp).toBeDefined();
    const infoApp = getByLabelText(infoLabel);
    expect(infoApp).toBeDefined();
  });

  it('Should open de menu side', () => {
    const { getByLabelText } = renderWithRouter(<AppBar />);
    const menuButton = getByLabelText(menuButtonLabel);
    expect(menuButton).toBeDefined();
    fireEvent.click(menuButton);
    const buttonClose = getByLabelText(menuButtonCloseLabel);
    expect(buttonClose).toBeDefined();
    const linkHome = getByLabelText('Link para a página inicial');
    expect(linkHome).toBeDefined();
    const linkFavorite = getByLabelText('Link para a lista de favoritos');
    expect(linkFavorite).toBeDefined();
    fireEvent.click(buttonClose);
  });

  it('Should open de help dialog', () => {
    const { getByLabelText } = createCompomnent();
    const helpButton = getByLabelText('Abrir informações sobre o Aplicativo');
    expect(helpButton).toBeDefined();
    fireEvent.click(helpButton);
    const helpDialog = getByLabelText('Caixa de diálogo das informações sobre o Aplicativo');
    expect(helpDialog).toBeDefined();
    const helpDialogContent = getByLabelText('Informações sobre o Aplicativo');
    expect(helpDialogContent).toBeDefined();
    const helpButtonClose = getByLabelText('Botão para fechar a caixa de diálogo');
    expect(helpButtonClose).toBeDefined();
    fireEvent.click(helpButtonClose);
  });
});
