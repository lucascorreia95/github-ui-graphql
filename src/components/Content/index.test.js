import React from 'react';

import { MockedProvider } from '@apollo/react-testing';
import { fireEvent, render, waitForElement } from '@testing-library/react';

import Content from './index';
import { SearchQuery, SearchRepoQuery } from '../../Services/graphql';

const searchUser = 'lucascorreia';
const searchRepo = 'lucascorreia95';

const mocks = [
  {
    request: {
      query: SearchQuery,
      variables: {
        queryUser: searchUser,
      },
    },
    result: {
      data: {
        search: {
          userCount: 11,
          edges: [
            {
              node: {
                __typename: 'User',
                name: 'Lucas Santos',
                login: 'lucascorreiabs',
                id: 'MDQ6VXNlcjM2NjY5MjQ1',
                avatarUrl: 'https://avatars2.githubusercontent.com/u/36669245?v=4',
                url: 'https://github.com/lucascorreiabs',
                bio: 'Computer Science - UFPB',
              },
            },
            {
              node: {
                __typename: 'User',
                name: 'Lucas Correia',
                login: 'lucascorreia95',
                id: 'MDQ6VXNlcjQzMjA3NDY3',
                avatarUrl: 'https://avatars0.githubusercontent.com/u/43207467?v=4',
                url: 'https://github.com/lucascorreia95',
                bio: 'Analista/Implementador Front-end',
              },
            },
            {
              node: {
                __typename: 'User',
                name: 'Lucas Correia Ribas',
                login: 'lucascorreiaribas',
                id: 'MDQ6VXNlcjMyNTMxOTU5',
                avatarUrl: 'https://avatars3.githubusercontent.com/u/32531959?v=4',
                url: 'https://github.com/lucascorreiaribas',
                bio: 'PhD Student in Computer Science at University of São Paulo',
              },
            },
          ],
        },
      },
    },
  },
  {
    request: {
      query: SearchRepoQuery,
      variables: {
        login: searchRepo,
      },
    },
    result: {
      data: {
        user: {
          repositories: {
            nodes: [
              {
                id: 'MDEwOlJlcG9zaXRvcnkxNDg4NjgyMDg=',
                name: 'curso-react',
                url: 'https://github.com/lucascorreia95/curso-react',
              },
              {
                id: 'MDEwOlJlcG9zaXRvcnkxNTQ0MDMwNzk=',
                name: 'projeto1',
                url: 'https://github.com/lucascorreia95/projeto1'
              },
              {
                id: 'MDEwOlJlcG9zaXRvcnkxNTc2MDc4MzI=',
                name: 'projeto2',
                url: 'https://github.com/lucascorreia95/projeto2'
              },
            ],
          },
        },
      },
    },
  },
];

function createCompomnent(props = {}) {
  const defaultProps = {
    ...props,
  };

  return render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Content {...defaultProps} />
    </MockedProvider>,
  );
}

describe('Tests for search form of component', () => {
  it('Should render component', () => {
    const { container } = createCompomnent();
    expect(container.firstChild).toBeDefined();
  });

  it('Should search users when form has been submitted', async () => {
    const { getByTestId, getAllByTestId } = createCompomnent();
    const fieldNode = getByTestId('form-field');
    fireEvent.change(
      fieldNode,
      { target: { value: searchUser } },
    );
    expect(fieldNode.value).toEqual(searchUser);
    const btnNode = getByTestId('form-button');
    fireEvent.click(btnNode);
    const cards = await waitForElement(
      () => getAllByTestId('cards'),
    );
    expect(cards).toBeDefined();
  });

  it('Should get the repositories from the user of the card', async () => {
    const { getByTestId, getAllByTestId, getByLabelText } = createCompomnent();
    const fieldNode = getByTestId('form-field');
    fireEvent.change(
      fieldNode,
      { target: { value: searchUser } },
    );
    expect(fieldNode.value).toEqual(searchUser);
    const btnNode = getByTestId('form-button');
    fireEvent.click(btnNode);
    const cards = await waitForElement(
      () => getAllByTestId('cards'),
    );
    expect(cards).toBeDefined();
    const repoButton = await waitForElement(
      () => getByLabelText(`Buscar Repositórios de ${searchRepo}`),
    );
    expect(repoButton).toBeDefined();
    fireEvent.click(repoButton);
  });
});
