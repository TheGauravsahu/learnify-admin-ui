import CountCard from "@/components/dashboard/CountCard";
import StudentChart from "@/components/dashboard/StudentChart";

export default function DahboardPage() {
  return (
    <div className="min-h-screen w-full p-4">
      <div className="flex items-center gap-4 flex-wrap">
        {[1, 2, 3, 4].map((item, i) => (
          <CountCard
            key={i}
            data={{
              year: "2024/25",
              count: item,
              title: "Students",
            }}
          />
        ))}
      </div>

      {/* CHART */}
      <div className="mt-8">
        <StudentChart />
      </div>
    </div>
  );
}
