/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateChatApp = /* GraphQL */ `
  subscription OnCreateChatApp(
    $id: ID
    $uid: String
    $text: String
    $createdAt: AWSTimestamp
    $photoURL: String
  ) {
    onCreateChatApp(
      id: $id
      uid: $uid
      text: $text
      createdAt: $createdAt
      photoURL: $photoURL
    ) {
      id
      uid
      text
      createdAt
      photoURL
    }
  }
`;
export const onUpdateChatApp = /* GraphQL */ `
  subscription OnUpdateChatApp(
    $id: ID
    $uid: String
    $text: String
    $createdAt: AWSTimestamp
    $photoURL: String
  ) {
    onUpdateChatApp(
      id: $id
      uid: $uid
      text: $text
      createdAt: $createdAt
      photoURL: $photoURL
    ) {
      id
      uid
      text
      createdAt
      photoURL
    }
  }
`;
export const onDeleteChatApp = /* GraphQL */ `
  subscription OnDeleteChatApp(
    $id: ID
    $uid: String
    $text: String
    $createdAt: AWSTimestamp
    $photoURL: String
  ) {
    onDeleteChatApp(
      id: $id
      uid: $uid
      text: $text
      createdAt: $createdAt
      photoURL: $photoURL
    ) {
      id
      uid
      text
      createdAt
      photoURL
    }
  }
`;
