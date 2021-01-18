/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCreateChatApp = /* GraphQL */ `
  query GetCreateChatApp($id: ID!) {
    getCreateChatApp(id: $id) {
      id
      text
      uid
      createdAt
      photoURL
      updatedAt
    }
  }
`;
export const listCreateChatApps = /* GraphQL */ `
  query ListCreateChatApps(
    $filter: ModelCreateChatAppFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCreateChatApps(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        text
        uid
        createdAt
        photoURL
        updatedAt
      }
      nextToken
    }
  }
`;
