/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getChatApp = /* GraphQL */ `
  query GetChatApp($id: ID!) {
    getChatApp(id: $id) {
      id
      uid
      text
      createdAt
      photoURL
    }
  }
`;
export const listChatApps = /* GraphQL */ `
  query ListChatApps(
    $filter: TableChatAppFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatApps(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        uid
        text
        createdAt
        photoURL
      }
      nextToken
    }
  }
`;
