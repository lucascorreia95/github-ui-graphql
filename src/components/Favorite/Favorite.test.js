import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { render, waitForElement } from '@testing-library/react';

import Favorite from './index';
import { FavoriteQuery } from '../../Services/graphql';

const favoriteUser = 'lucascorreia95';

const mocks = [
  {
    request: {
      query: FavoriteQuery,
      variables: {
        login: favoriteUser,
      },
    },
    result: {
      data: {
        user: {
          name: 'Lucas Correia',
          login: 'lucascorreia95',
          id: 'MDQ6VXNlcjQzMjA3NDY3',
          avatarUrl: 'https://avatars0.githubusercontent.com/u/43207467?v=4',
          url: 'https://github.com/lucascorreia95',
          bio: 'Analista/Implementador Front-end',
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
                url: 'https://github.com/lucascorreia95/projeto1',
              },
              {
                id: 'MDEwOlJlcG9zaXRvcnkxNTc2MDc4MzI=',
                name: 'projeto2',
                url: 'https://github.com/lucascorreia95/projeto2',
              },
              {
                id: 'MDEwOlJlcG9zaXRvcnkxNTkyMzE5MDg=',
                name: 'github-app',
                url: 'https://github.com/lucascorreia95/github-app',
              },
              {
                id: 'MDEwOlJlcG9zaXRvcnkxNjg2MjI5NTg=',
                name: 'curso-react-2',
                url: 'https://github.com/lucascorreia95/curso-react-2',
              },
              {
                id: 'MDEwOlJlcG9zaXRvcnkxNjk0OTAxMzg=',
                name: 'omni-stack',
                url: 'https://github.com/lucascorreia95/omni-stack',
              },
              {
                id: 'MDEwOlJlcG9zaXRvcnkxNzA3MTg5MTg=',
                name: '_scripts',
                url: 'https://github.com/lucascorreia95/_scripts',
              },
              {
                id: 'MDEwOlJlcG9zaXRvcnkxNzEzNzExMTc=',
                name: 'marvel-app',
                url: 'https://github.com/lucascorreia95/marvel-app',
              },
              {
                id: 'MDEwOlJlcG9zaXRvcnkxNzE1OTUzMjY=',
                name: 'marvel-api',
                url: 'https://github.com/thomazot/marvel-api',
              },
              {
                id: 'MDEwOlJlcG9zaXRvcnkxNzQ1NDQ0NTI=',
                name: 'marvel-api',
                url: 'https://github.com/lucascorreia95/marvel-api',
              },
            ],
          },
        },
      },
    },
  },
];

function createCompomnent(props = {}, mocks) {
  const defaultProps = {
    ...props,
  };

  return render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Favorite {...defaultProps} />
    </MockedProvider>,
  );
}

describe('Tests for Favorite component', () => {
  it('Should render component', () => {
    const { container } = createCompomnent({}, []);
    expect(container.firstChild).toBeDefined();
  });

  it('Should render component with favorite user', async () => {
    const { container, getAllByTestId } = createCompomnent({}, mocks);
    expect(container.firstChild).toBeDefined();
    const cards = await waitForElement(
      () => getAllByTestId('cards'),
    );
    expect(cards).toBeDefined();
  });
});
