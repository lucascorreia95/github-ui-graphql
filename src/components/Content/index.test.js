import React from 'react';

import { MockedProvider } from '@apollo/react-testing';
import { fireEvent, render, waitForElement } from '@testing-library/react';

import Content from './index';
import { SearchQuery } from '../../Services/graphql';

const searchUser = 'lucascorreia';

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
];

describe('Tests for search form of component', () => {
  it('Should search users when form has been submitted', async () => {
    const { getByTestId } = render(
      <MockedProvider mocks={mocks}>
        <Content />
      </MockedProvider>,
    );
    const fieldNode = await waitForElement(
      () => getByTestId('form-field'),
    );
    fireEvent.change(
      fieldNode,
      { target: { value: searchUser } },
    );
    expect(fieldNode.value).toEqual(searchUser);
    const btnNode = await waitForElement(
      () => getByTestId('form-button'),
    );
    fireEvent.click(btnNode);
  });
});
