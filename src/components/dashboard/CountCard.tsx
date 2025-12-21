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
    <Card className="w-54 md:w-68 h-40 odd:bg-primary/60 even:bg-lightYellow  border-gray-400">
      <CardHeader>
        <span className="w-15 h-6 mb-2 flex items-center justify-center p-1 text-[12px]  rounded-full bg-white text-green-400">
          {year}
        </span>
        <CardTitle className="text-2xl font-bold">{count}</CardTitle>
        <CardAction>
          <Ellipsis className="text-white" />
        </CardAction>
      </CardHeader>
      <CardContent>
        <span className="text-muted-foreground text-sm  ">{title}</span>
      </CardContent>
    </Card>
  );
}
