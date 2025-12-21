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
import { RadialBar, RadialBarChart } from "recharts";

const chartData = [
  {
    title: "total",
    count: 106,
    fill: "#fff",
  },
  {
    title: "girls",
    count: 53,
    fill: "#48cae4",
  },
  {
    title: "boys",
    count: 56,
    fill: "#FAE27C",
  },
];

const chartConfig = {
  boys: {
    label: "Boys",
    color: "#FAE27C",
  },
  girls: {
    label: "Girls",
    color: "#48cae4",
  },
} satisfies ChartConfig;

export const description = "A radial chart";

export default function StudentChart() {
  return (
    <Card className="flex flex-col w-84 border-gray-200 shadow-none">
      <CardHeader className="items-center pb-0">
        <CardTitle className="text-xl font-bold">Students</CardTitle>
        <CardAction>
          <Ellipsis />
        </CardAction>
      </CardHeader>
      <CardContent className="flex-1">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[200px]"
        >
          <RadialBarChart data={chartData} innerRadius={40} outerRadius={100}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel nameKey="title" />}
            />
            <RadialBar dataKey="count" background />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex items-center gap-8 justify-center">
        <div className="flex flex-col items-start justify-start">
          <div className="bg-[#FAE27C] size-4 rounded-full" />
          <h3 className="font-semibold">23</h3>
          <span className="text-muted-foreground text-sm">No of Boys</span>
        </div>
        <div className="flex flex-col items-start justify-start">
          <div className="bg-[#48cae4] size-4 rounded-full" />
          <h3 className="font-semibold">36</h3>
          <span className="text-muted-foreground text-sm">No of Girls</span>
        </div>
      </CardFooter>
    </Card>
  );
}
