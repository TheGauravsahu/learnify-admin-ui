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
    "\n  query AdminDashboard {\n    adminDashboard {\n      counts {\n        students\n        teachers\n        parents\n        classes\n        notices\n      }\n      genderStats {\n        boys\n        girls\n      }\n      latestNotices {\n        _id\n        title\n        description\n        createdAt\n      }\n    }\n    classWiseStudentCount {\n      classId\n      className\n      count\n    }\n  }\n": typeof types.AdminDashboardDocument,
    "\n  query ListTeachers(\n    $page: Int\n    $limit: Int\n    $sortBy: TeacherSortField\n    $sortOrder: SortOrder\n    $search: String\n  ) {\n    teachers(\n      page: $page\n      limit: $limit\n      sortBy: $sortBy\n      sortOrder: $sortOrder\n      search: $search\n    ) {\n      total\n      page\n      limit\n      data {\n        _id\n        subject\n        experience\n        user {\n          name\n          _id\n          email\n        }\n      }\n    }\n  }\n": typeof types.ListTeachersDocument,
};
const documents: Documents = {
    "\n  query AdminDashboard {\n    adminDashboard {\n      counts {\n        students\n        teachers\n        parents\n        classes\n        notices\n      }\n      genderStats {\n        boys\n        girls\n      }\n      latestNotices {\n        _id\n        title\n        description\n        createdAt\n      }\n    }\n    classWiseStudentCount {\n      classId\n      className\n      count\n    }\n  }\n": types.AdminDashboardDocument,
    "\n  query ListTeachers(\n    $page: Int\n    $limit: Int\n    $sortBy: TeacherSortField\n    $sortOrder: SortOrder\n    $search: String\n  ) {\n    teachers(\n      page: $page\n      limit: $limit\n      sortBy: $sortBy\n      sortOrder: $sortOrder\n      search: $search\n    ) {\n      total\n      page\n      limit\n      data {\n        _id\n        subject\n        experience\n        user {\n          name\n          _id\n          email\n        }\n      }\n    }\n  }\n": types.ListTeachersDocument,
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
export function graphql(source: "\n  query AdminDashboard {\n    adminDashboard {\n      counts {\n        students\n        teachers\n        parents\n        classes\n        notices\n      }\n      genderStats {\n        boys\n        girls\n      }\n      latestNotices {\n        _id\n        title\n        description\n        createdAt\n      }\n    }\n    classWiseStudentCount {\n      classId\n      className\n      count\n    }\n  }\n"): (typeof documents)["\n  query AdminDashboard {\n    adminDashboard {\n      counts {\n        students\n        teachers\n        parents\n        classes\n        notices\n      }\n      genderStats {\n        boys\n        girls\n      }\n      latestNotices {\n        _id\n        title\n        description\n        createdAt\n      }\n    }\n    classWiseStudentCount {\n      classId\n      className\n      count\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ListTeachers(\n    $page: Int\n    $limit: Int\n    $sortBy: TeacherSortField\n    $sortOrder: SortOrder\n    $search: String\n  ) {\n    teachers(\n      page: $page\n      limit: $limit\n      sortBy: $sortBy\n      sortOrder: $sortOrder\n      search: $search\n    ) {\n      total\n      page\n      limit\n      data {\n        _id\n        subject\n        experience\n        user {\n          name\n          _id\n          email\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query ListTeachers(\n    $page: Int\n    $limit: Int\n    $sortBy: TeacherSortField\n    $sortOrder: SortOrder\n    $search: String\n  ) {\n    teachers(\n      page: $page\n      limit: $limit\n      sortBy: $sortBy\n      sortOrder: $sortOrder\n      search: $search\n    ) {\n      total\n      page\n      limit\n      data {\n        _id\n        subject\n        experience\n        user {\n          name\n          _id\n          email\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;