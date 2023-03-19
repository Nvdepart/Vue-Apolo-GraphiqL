import gql from "graphql-tag";
export const INSERT_USER = gql`
  mutation insertUser(
    $id: uuid!
    $name: string!
    $twitter: string!
    $rocket: string!
  ) {
    insert_users(
      objects: { id: $id, name: $name, twitter: $twitter, rocket: $rocket }
    ) {
      returning {
        id
        name
        twitter
        rocket
      }
    }
  }
`;
