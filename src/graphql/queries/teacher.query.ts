import { graphql } from "@/gql";

export const LIST_TEACHERS = graphql(`
  query ListTeachers(
    $page: Int
    $limit: Int
    $sortBy: TeacherSortField
    $sortOrder: SortOrder
    $search: String
  ) {
    teachers(
      page: $page
      limit: $limit
      sortBy: $sortBy
      sortOrder: $sortOrder
      search: $search
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
