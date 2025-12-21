import { graphql } from "@/gql";

export const GET_DASHBOARD_STATS = graphql(`
  query GetDashboardStats {
    adminDashboard {
      counts {
        students
        classes
        notices
        teachers
        parents
      }
      genderStats {
        boys
        girls
      }
      latestNotices {
        title
        description
        createdAt
        _id
      }
    }
  }
`);
