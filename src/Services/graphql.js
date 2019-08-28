import gql from 'graphql-tag';

export const SearchQuery = gql`
  query search($queryUser: String!){
    search(query: $queryUser, type: USER, first: 5) {
      userCount
      edges{
        node{
          __typename
          ... on User {
            name
            login
            id
            avatarUrl
            url
            bio
          }
        }
      }
    }
  }
`;

export const SearchRepoQuery = gql`
  query Search($login : String!) {
    user(login: $login) {
      repositories(first: 10){
        nodes{
          id
          name
          url
        }
      }
    }
  }
`;

export const FavoriteQuery = gql`
  query Search($login : String!) {
    user(login: $login) {
      name
      login
      id
      avatarUrl
      url
      bio
      repositories(first: 10){
        nodes{
          id
          name
          url
        }
      }
    }
  }
`;
