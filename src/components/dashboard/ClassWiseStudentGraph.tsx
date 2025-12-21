import type { ClassStudentCount } from "@/gql/graphql";
import { Bar, BarChart, XAxis, YAxis } from "recharts";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { Ellipsis } from "lucide-react";

const chartConfig = {
  students: {
    label: "Students",
    color: "#FAE27C",
  },
} satisfies ChartConfig;

export default function ClassWiseStudentGraph({
  data,
}: {
  data: ClassStudentCount[];
}) {
  const chartData = data.map((item) => ({
    class: item.className,
    students: item.count,
    fill: "#FAE27C",
  }));

  return (
    <Card className="h-100 w-xl border-gray-200 shadow-none">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">
          Class Wise Students
        </CardTitle>
        <CardAction>
          <Ellipsis />
        </CardAction>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData} layout="vertical">
            <YAxis
              dataKey="class"
              type="category"
              tickLine={false}
              tickMargin={6}
              width={70}
              tick={{ fontSize: 12 }}
              axisLine={false}
            />
            <XAxis type="number" height={10} width={10} hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="students" layout="vertical" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm"></CardFooter>
    </Card>
  );
}
