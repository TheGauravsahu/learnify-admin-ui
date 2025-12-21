import ErrorOccurred from "@/components/common/ErrorOccurred";
import { ScreenLoader } from "@/components/common/Loader";
import CountCard from "@/components/dashboard/CountCard";
import StudentChart from "@/components/dashboard/StudentChart";
import { type GetDashboardStatsQuery } from "@/gql/graphql";
import { GET_DASHBOARD_STATS } from "@/graphql/queries/dashboard.query";
import { useQuery } from "@apollo/client/react";

export default function DahboardPage() {
  const { data, loading, error } =
    useQuery<GetDashboardStatsQuery>(GET_DASHBOARD_STATS);

  if (loading) return <ScreenLoader />;
  if (error) return <ErrorOccurred error={error} />;

  const counts = data!.adminDashboard.counts;
  const genderStats = data!.adminDashboard.genderStats;

  return (
    <div className="min-h-screen w-full p-4">
      {/* COUNT CARDS */}
      <div className="flex items-center gap-4 flex-wrap">
        <CountCard
          data={{ year: "2024/25", title: "Students", count: counts.students }}
        />
        <CountCard
          data={{ year: "2024/25", title: "Teachers", count: counts.teachers }}
        />
        <CountCard
          data={{ year: "2024/25", title: "Classes", count: counts.classes }}
        />
        <CountCard
          data={{ year: "2024/25", title: "Notices", count: counts.notices }}
        />
      </div>

      {/* CHART */}
      <div className="mt-8">
        <StudentChart genderStats={genderStats} />
      </div>
    </div>
  );
}
