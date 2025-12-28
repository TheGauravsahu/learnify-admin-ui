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
          role
        }
      }
    }
  }
`);

export const CREATE_TEACHER = graphql(`
  mutation CreateTeacher($input: TeacherInput!) {
    createTeacher(input: $input) {
      _id
      subject
      experience
    }
  }
`);

export const DELETE_TEACHER = graphql(`
  mutation DeleteTeacher($teacherId: ID!) {
    deleteTeacher(id: $teacherId)
  }
`);

export const UPDATE_TEACHER = graphql(`
  mutation UpdateTeacher($teacherId: ID!, $input: TeacherInput!) {
    updateTeacher(id: $teacherId, input: $input) {
      _id
    }
  }
`);
