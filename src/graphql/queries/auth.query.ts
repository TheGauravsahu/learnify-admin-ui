import { graphql } from "@/gql";

export const LOGIN = graphql(`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      token
      user {
        _id
        name
        email
        role
        updatedAt
      }
    }
  }
`);
