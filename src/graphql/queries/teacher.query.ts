import { graphql } from "@/gql";

export const LIST_TEACHERS = graphql(`
  query ListTeachers {
    teachers {
      _id
      subject
      experience
      user {
        name
        _id
        email
      }
    }
  }
`);
