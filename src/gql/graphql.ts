/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  JSON: { input: any; output: any; }
};

export type Attendance = {
  __typename?: 'Attendance';
  _id: Scalars['ID']['output'];
  classId: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  date: Scalars['String']['output'];
  isPresent: Scalars['Boolean']['output'];
  markedBy: Teacher;
  studentId: Student;
  updatedAt: Scalars['String']['output'];
};

export type AttendanceRecordInput = {
  isPresent: Scalars['Boolean']['input'];
  studentId: Scalars['ID']['input'];
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  token: Scalars['String']['output'];
  user: User;
};

export type Class = {
  __typename?: 'Class';
  _id: Scalars['ID']['output'];
  academicYear: Scalars['String']['output'];
  classTeacher?: Maybe<Teacher>;
  createdAt: Scalars['String']['output'];
  name: Scalars['String']['output'];
  section: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type ClassAttendaceInput = {
  classId: Scalars['String']['input'];
  date: Scalars['String']['input'];
  records?: InputMaybe<Array<InputMaybe<AttendanceRecordInput>>>;
};

export type ClassInput = {
  academicYear?: InputMaybe<Scalars['String']['input']>;
  classTeacher?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  section?: InputMaybe<Scalars['String']['input']>;
};

export type ClassStudentCount = {
  __typename?: 'ClassStudentCount';
  classId: Scalars['ID']['output'];
  className: Scalars['String']['output'];
  count: Scalars['Int']['output'];
};

export type DashboardCounts = {
  __typename?: 'DashboardCounts';
  classes: Scalars['Int']['output'];
  notices: Scalars['Int']['output'];
  parents: Scalars['Int']['output'];
  students: Scalars['Int']['output'];
  teachers: Scalars['Int']['output'];
};

export type DashboardOverview = {
  __typename?: 'DashboardOverview';
  counts: DashboardCounts;
  genderStats: GenderStats;
  latestNotices: Array<Notice>;
};

export type GenderStats = {
  __typename?: 'GenderStats';
  boys: Scalars['Int']['output'];
  girls: Scalars['Int']['output'];
};

export type Homework = {
  __typename?: 'Homework';
  _id: Scalars['ID']['output'];
  classId: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  description: Scalars['String']['output'];
  dueDate: Scalars['Date']['output'];
  subject: Scalars['String']['output'];
  teacherId: Teacher;
  updatedAt: Scalars['String']['output'];
};

export type HomeworkInput = {
  classId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  dueDate?: InputMaybe<Scalars['Date']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
};

export type LoginInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  _empty?: Maybe<Scalars['String']['output']>;
  createClass: Class;
  createHomework: Homework;
  createNotice: Notice;
  createStudent: Student;
  createTeacher: Teacher;
  deleteClass: Scalars['Boolean']['output'];
  deleteHomework: Scalars['Boolean']['output'];
  deleteNotice: Scalars['Boolean']['output'];
  deleteStudent: Scalars['Boolean']['output'];
  deleteTeacher: Scalars['Boolean']['output'];
  login?: Maybe<AuthPayload>;
  markAttendance: Scalars['Boolean']['output'];
  register?: Maybe<AuthPayload>;
  updateClass: Class;
  updateHomework: Homework;
  updateNotice: Notice;
  updateStudent: Student;
  updateTeacher: Teacher;
};


export type MutationCreateClassArgs = {
  input: ClassInput;
};


export type MutationCreateHomeworkArgs = {
  input: HomeworkInput;
};


export type MutationCreateNoticeArgs = {
  input: NoticeInput;
};


export type MutationCreateStudentArgs = {
  input: StudentInput;
};


export type MutationCreateTeacherArgs = {
  input: TeacherInput;
};


export type MutationDeleteClassArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteHomeworkArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteNoticeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteStudentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTeacherArgs = {
  id: Scalars['ID']['input'];
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationMarkAttendanceArgs = {
  input: ClassAttendaceInput;
};


export type MutationRegisterArgs = {
  input: RegisterInput;
};


export type MutationUpdateClassArgs = {
  id: Scalars['ID']['input'];
  input: ClassInput;
};


export type MutationUpdateHomeworkArgs = {
  id: Scalars['ID']['input'];
  input: HomeworkInput;
};


export type MutationUpdateNoticeArgs = {
  id: Scalars['ID']['input'];
  input: NoticeInput;
};


export type MutationUpdateStudentArgs = {
  id: Scalars['ID']['input'];
  input?: InputMaybe<StudentInput>;
};


export type MutationUpdateTeacherArgs = {
  id: Scalars['ID']['input'];
  input: TeacherInput;
};

export type Notice = {
  __typename?: 'Notice';
  _id: Scalars['ID']['output'];
  createdAt: Scalars['String']['output'];
  createdBy: User;
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type NoticeInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  _empty?: Maybe<Scalars['String']['output']>;
  adminDashboard: DashboardOverview;
  attendaces: Array<Homework>;
  class?: Maybe<Class>;
  classWiseStudentCount: Array<ClassStudentCount>;
  classes: Array<Class>;
  homework?: Maybe<Homework>;
  homeworks: Array<Homework>;
  notice?: Maybe<Notice>;
  notices: Array<Notice>;
  student?: Maybe<Student>;
  students: Array<Student>;
  teacher?: Maybe<Teacher>;
  teachers: Array<Teacher>;
};


export type QueryAttendacesArgs = {
  classId: Scalars['String']['input'];
};


export type QueryClassArgs = {
  id: Scalars['ID']['input'];
};


export type QueryHomeworkArgs = {
  id: Scalars['ID']['input'];
};


export type QueryNoticeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryStudentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTeacherArgs = {
  id: Scalars['ID']['input'];
};

export type RegisterInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Role>;
};

export enum Role {
  Admin = 'ADMIN',
  Parent = 'PARENT',
  Student = 'STUDENT',
  Teacher = 'TEACHER'
}

export type Student = {
  __typename?: 'Student';
  _id: Scalars['ID']['output'];
  class: Class;
  createdAt: Scalars['String']['output'];
  gender: Scalars['String']['output'];
  rollNumber: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
  user: User;
};

export type StudentInput = {
  class?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  rollNumber?: InputMaybe<Scalars['Int']['input']>;
  user?: InputMaybe<Scalars['ID']['input']>;
};

export type Teacher = {
  __typename?: 'Teacher';
  _id: Scalars['ID']['output'];
  experience: Scalars['Int']['output'];
  subject: Scalars['String']['output'];
  user: User;
};

export type TeacherInput = {
  experience?: InputMaybe<Scalars['Int']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Scalars['ID']['input']>;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID']['output'];
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  name: Scalars['String']['output'];
  role: Role;
  updatedAt: Scalars['String']['output'];
};

export type AdminDashboardQueryVariables = Exact<{ [key: string]: never; }>;


export type AdminDashboardQuery = { __typename?: 'Query', adminDashboard: { __typename?: 'DashboardOverview', counts: { __typename?: 'DashboardCounts', students: number, teachers: number, parents: number, classes: number, notices: number }, genderStats: { __typename?: 'GenderStats', boys: number, girls: number }, latestNotices: Array<{ __typename?: 'Notice', _id: string, title: string, description: string, createdAt: string }> }, classWiseStudentCount: Array<{ __typename?: 'ClassStudentCount', classId: string, className: string, count: number }> };

export type ListTeachersQueryVariables = Exact<{ [key: string]: never; }>;


export type ListTeachersQuery = { __typename?: 'Query', teachers: Array<{ __typename?: 'Teacher', _id: string, subject: string, experience: number, user: { __typename?: 'User', name: string, _id: string, email: string } }> };


export const AdminDashboardDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AdminDashboard"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adminDashboard"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"counts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"students"}},{"kind":"Field","name":{"kind":"Name","value":"teachers"}},{"kind":"Field","name":{"kind":"Name","value":"parents"}},{"kind":"Field","name":{"kind":"Name","value":"classes"}},{"kind":"Field","name":{"kind":"Name","value":"notices"}}]}},{"kind":"Field","name":{"kind":"Name","value":"genderStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"boys"}},{"kind":"Field","name":{"kind":"Name","value":"girls"}}]}},{"kind":"Field","name":{"kind":"Name","value":"latestNotices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"classWiseStudentCount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"classId"}},{"kind":"Field","name":{"kind":"Name","value":"className"}},{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]} as unknown as DocumentNode<AdminDashboardQuery, AdminDashboardQueryVariables>;
export const ListTeachersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListTeachers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teachers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"subject"}},{"kind":"Field","name":{"kind":"Name","value":"experience"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]}}]} as unknown as DocumentNode<ListTeachersQuery, ListTeachersQueryVariables>;