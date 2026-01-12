import { graphql } from "@/gql";

export const LIST_CLASSES = graphql(`
  query ListClasses {
    classes {
      _id
      name
      section
      academicYear
      classTeacher {
        _id
        user {
          name
        }
      }
    }
  }
`);

export const DELETE_CLASS = graphql(`
  mutation DeleteClass($classId: ID!) {
    deleteClass(id: $classId)
  }
`);

export const EDIT_CLASS = graphql(`
  mutation EditClass($classId: ID!, $input: ClassInput!) {
    updateClass(id: $classId, input: $input) {
      _id
      name
    }
  }
`);
