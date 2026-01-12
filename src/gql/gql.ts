/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  mutation Login($input: LoginInput!) {\n    login(input: $input) {\n      user {\n        _id\n        name\n        email\n        role\n        updatedAt\n      }\n      refreshToken\n      accessToken\n    }\n  }\n": typeof types.LoginDocument,
    "\n  mutation Logout($refreshToken: String!) {\n  logout(refreshToken: $refreshToken)\n}": typeof types.LogoutDocument,
    "\n  query ListClasses {\n    classes {\n      _id\n      name\n      section\n      academicYear\n      classTeacher {\n        _id\n        user {\n          name\n        }\n      }\n    }\n  }\n": typeof types.ListClassesDocument,
    "\n  mutation DeleteClass($classId: ID!) {\n    deleteClass(id: $classId)\n  }\n": typeof types.DeleteClassDocument,
    "\n  mutation EditClass($classId: ID!, $input: ClassInput!) {\n    updateClass(id: $classId, input: $input) {\n      _id\n      name\n    }\n  }\n": typeof types.EditClassDocument,
    "\n  query AdminDashboard {\n    adminDashboard {\n      counts {\n        students\n        teachers\n        parents\n        classes\n        notices\n      }\n      genderStats {\n        boys\n        girls\n      }\n      latestNotices {\n        _id\n        title\n        description\n        createdAt\n      }\n    }\n    classWiseStudentCount {\n      classId\n      className\n      count\n    }\n  }\n": typeof types.AdminDashboardDocument,
    "\n  query ListTeachers(\n    $page: Int\n    $limit: Int\n    $sortBy: TeacherSortField\n    $sortOrder: SortOrder\n    $search: String\n  ) {\n    teachers(\n      page: $page\n      limit: $limit\n      sortBy: $sortBy\n      sortOrder: $sortOrder\n      search: $search\n    ) {\n      total\n      page\n      limit\n      data {\n        _id\n        subject\n        experience\n        user {\n          name\n          _id\n          email\n          role\n        }\n      }\n    }\n  }\n": typeof types.ListTeachersDocument,
    "\n  mutation CreateTeacher($input: TeacherInput!) {\n    createTeacher(input: $input) {\n      _id\n      subject\n      experience\n    }\n  }\n": typeof types.CreateTeacherDocument,
    "\n  mutation DeleteTeacher($teacherId: ID!) {\n    deleteTeacher(id: $teacherId)\n  }\n": typeof types.DeleteTeacherDocument,
    "\n  mutation UpdateTeacher($teacherId: ID!, $input: TeacherInput!) {\n    updateTeacher(id: $teacherId, input: $input) {\n      _id\n    }\n  }\n": typeof types.UpdateTeacherDocument,
};
const documents: Documents = {
    "\n  mutation Login($input: LoginInput!) {\n    login(input: $input) {\n      user {\n        _id\n        name\n        email\n        role\n        updatedAt\n      }\n      refreshToken\n      accessToken\n    }\n  }\n": types.LoginDocument,
    "\n  mutation Logout($refreshToken: String!) {\n  logout(refreshToken: $refreshToken)\n}": types.LogoutDocument,
    "\n  query ListClasses {\n    classes {\n      _id\n      name\n      section\n      academicYear\n      classTeacher {\n        _id\n        user {\n          name\n        }\n      }\n    }\n  }\n": types.ListClassesDocument,
    "\n  mutation DeleteClass($classId: ID!) {\n    deleteClass(id: $classId)\n  }\n": types.DeleteClassDocument,
    "\n  mutation EditClass($classId: ID!, $input: ClassInput!) {\n    updateClass(id: $classId, input: $input) {\n      _id\n      name\n    }\n  }\n": types.EditClassDocument,
    "\n  query AdminDashboard {\n    adminDashboard {\n      counts {\n        students\n        teachers\n        parents\n        classes\n        notices\n      }\n      genderStats {\n        boys\n        girls\n      }\n      latestNotices {\n        _id\n        title\n        description\n        createdAt\n      }\n    }\n    classWiseStudentCount {\n      classId\n      className\n      count\n    }\n  }\n": types.AdminDashboardDocument,
    "\n  query ListTeachers(\n    $page: Int\n    $limit: Int\n    $sortBy: TeacherSortField\n    $sortOrder: SortOrder\n    $search: String\n  ) {\n    teachers(\n      page: $page\n      limit: $limit\n      sortBy: $sortBy\n      sortOrder: $sortOrder\n      search: $search\n    ) {\n      total\n      page\n      limit\n      data {\n        _id\n        subject\n        experience\n        user {\n          name\n          _id\n          email\n          role\n        }\n      }\n    }\n  }\n": types.ListTeachersDocument,
    "\n  mutation CreateTeacher($input: TeacherInput!) {\n    createTeacher(input: $input) {\n      _id\n      subject\n      experience\n    }\n  }\n": types.CreateTeacherDocument,
    "\n  mutation DeleteTeacher($teacherId: ID!) {\n    deleteTeacher(id: $teacherId)\n  }\n": types.DeleteTeacherDocument,
    "\n  mutation UpdateTeacher($teacherId: ID!, $input: TeacherInput!) {\n    updateTeacher(id: $teacherId, input: $input) {\n      _id\n    }\n  }\n": types.UpdateTeacherDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Login($input: LoginInput!) {\n    login(input: $input) {\n      user {\n        _id\n        name\n        email\n        role\n        updatedAt\n      }\n      refreshToken\n      accessToken\n    }\n  }\n"): (typeof documents)["\n  mutation Login($input: LoginInput!) {\n    login(input: $input) {\n      user {\n        _id\n        name\n        email\n        role\n        updatedAt\n      }\n      refreshToken\n      accessToken\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Logout($refreshToken: String!) {\n  logout(refreshToken: $refreshToken)\n}"): (typeof documents)["\n  mutation Logout($refreshToken: String!) {\n  logout(refreshToken: $refreshToken)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ListClasses {\n    classes {\n      _id\n      name\n      section\n      academicYear\n      classTeacher {\n        _id\n        user {\n          name\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query ListClasses {\n    classes {\n      _id\n      name\n      section\n      academicYear\n      classTeacher {\n        _id\n        user {\n          name\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteClass($classId: ID!) {\n    deleteClass(id: $classId)\n  }\n"): (typeof documents)["\n  mutation DeleteClass($classId: ID!) {\n    deleteClass(id: $classId)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation EditClass($classId: ID!, $input: ClassInput!) {\n    updateClass(id: $classId, input: $input) {\n      _id\n      name\n    }\n  }\n"): (typeof documents)["\n  mutation EditClass($classId: ID!, $input: ClassInput!) {\n    updateClass(id: $classId, input: $input) {\n      _id\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AdminDashboard {\n    adminDashboard {\n      counts {\n        students\n        teachers\n        parents\n        classes\n        notices\n      }\n      genderStats {\n        boys\n        girls\n      }\n      latestNotices {\n        _id\n        title\n        description\n        createdAt\n      }\n    }\n    classWiseStudentCount {\n      classId\n      className\n      count\n    }\n  }\n"): (typeof documents)["\n  query AdminDashboard {\n    adminDashboard {\n      counts {\n        students\n        teachers\n        parents\n        classes\n        notices\n      }\n      genderStats {\n        boys\n        girls\n      }\n      latestNotices {\n        _id\n        title\n        description\n        createdAt\n      }\n    }\n    classWiseStudentCount {\n      classId\n      className\n      count\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ListTeachers(\n    $page: Int\n    $limit: Int\n    $sortBy: TeacherSortField\n    $sortOrder: SortOrder\n    $search: String\n  ) {\n    teachers(\n      page: $page\n      limit: $limit\n      sortBy: $sortBy\n      sortOrder: $sortOrder\n      search: $search\n    ) {\n      total\n      page\n      limit\n      data {\n        _id\n        subject\n        experience\n        user {\n          name\n          _id\n          email\n          role\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query ListTeachers(\n    $page: Int\n    $limit: Int\n    $sortBy: TeacherSortField\n    $sortOrder: SortOrder\n    $search: String\n  ) {\n    teachers(\n      page: $page\n      limit: $limit\n      sortBy: $sortBy\n      sortOrder: $sortOrder\n      search: $search\n    ) {\n      total\n      page\n      limit\n      data {\n        _id\n        subject\n        experience\n        user {\n          name\n          _id\n          email\n          role\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateTeacher($input: TeacherInput!) {\n    createTeacher(input: $input) {\n      _id\n      subject\n      experience\n    }\n  }\n"): (typeof documents)["\n  mutation CreateTeacher($input: TeacherInput!) {\n    createTeacher(input: $input) {\n      _id\n      subject\n      experience\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteTeacher($teacherId: ID!) {\n    deleteTeacher(id: $teacherId)\n  }\n"): (typeof documents)["\n  mutation DeleteTeacher($teacherId: ID!) {\n    deleteTeacher(id: $teacherId)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateTeacher($teacherId: ID!, $input: TeacherInput!) {\n    updateTeacher(id: $teacherId, input: $input) {\n      _id\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateTeacher($teacherId: ID!, $input: TeacherInput!) {\n    updateTeacher(id: $teacherId, input: $input) {\n      _id\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;