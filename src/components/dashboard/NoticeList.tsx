import type { Notice } from "@/gql/graphql";
import { Link } from "react-router-dom";

export default function NoticeList({
  notices,
}: {
  notices: Partial<Notice>[];
}) {
  return (
    <div className="max-w-2xl p-4 mt-8">
      <div className="flex items-center justify-between">
        <div className="flex justify-between">
          <h2 className="font-semibold text-lg">Latest Notices</h2>
          <span></span>
        </div>
        <Link
          to={"/"}
          className="hover:underline text-muted-foreground text-sm"
        >
          View All
        </Link>
      </div>

      <div className="flex flex-wrap flex-col gap-4 mt-6">
        {notices.map((notice) => (
          <div
            className="h-20 w-full shadow-xs border-gray-100 border-t-4 even:border-t-lightYellow odd:border-t-[#A682FD] bg-background rounded-lg p-4"
            key={notice._id}
          >
            <h3 className="font-semibold">{notice.title}</h3>
            <span className="text-muted-foreground text-sm">
              {notice.description?.slice(0, 80)}...
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
