import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Ellipsis } from "lucide-react";

interface CountCardProps {
  year: string;
  count: number;
  title: string;
}

export default function CountCard({
  data: { year, count, title },
}: {
  data: CountCardProps;
}) {
  return (
    <Card className="w-70 lg:w-68  h-40 odd:bg-primary/60 even:bg-lightYellow even:dark:bg-amber-300 border-gray-400">
      <CardHeader>
        <span className="w-15 h-6 mb-2 flex items-center justify-center p-1 text-[12px]  rounded-full bg-white dark:bg-green-800/80 text-green-400 dark:text-white">
          {year}
        </span>
        <CardTitle className="text-2xl font-bold">{count}</CardTitle>
        <CardAction>
          <Ellipsis className="text-white" />
        </CardAction>
      </CardHeader>
      <CardContent>
        <span className="text-muted-foreground dark:text-background text-sm">
          {title}
        </span>
      </CardContent>
    </Card>
  );
}
