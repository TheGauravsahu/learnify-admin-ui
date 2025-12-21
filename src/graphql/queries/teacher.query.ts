import { graphql } from "@/gql";

export const LIST_TEACHERS = graphql(`
  query ListTeachers(
    $page: Int
    $limit: Int
    $sortBy: TeacherSortField
    $sortOrder: SortOrder
  ) {
    teachers(
      page: $page
      limit: $limit
      sortBy: $sortBy
      sortOrder: $sortOrder
    ) {
      total
      page
      limit
      data {
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
  }
`);
