import { graphql } from "@/gql";

export const LOGIN = graphql(`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      user {
        _id
        name
        email
        role
        updatedAt
      }
      refreshToken
      accessToken
    }
  }
`);

export const LOGOUT = graphql(`
  mutation Logout($refreshToken: String!) {
  logout(refreshToken: $refreshToken)
}`)
