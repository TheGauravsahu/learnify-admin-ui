import { graphql } from "@/gql";

export const GET_DASHBOARD_STATS = graphql(`
  query AdminDashboard {
    adminDashboard {
      counts {
        students
        teachers
        parents
        classes
        notices
      }
      genderStats {
        boys
        girls
      }
      latestNotices {
        _id
        title
        description
        createdAt
      }
    }
    classWiseStudentCount {
      classId
      className
      count
    }
  }
`);
