import { Button } from "@/components/ui/button";
import { ArrowDownWideNarrow, ArrowUpWideNarrow, Search } from "lucide-react";
import SortByDropdown from "./SortByDropdown";
import TeacherForm from "./TeacherForm";
import { useMutation } from "@apollo/client/react";
import { CREATE_TEACHER } from "@/graphql/queries/teacher.query";
import { toast } from "sonner";

interface TeacherListHeaderProps {
  sortOrder: "asc" | "desc";
  updateParam: (key: string, value: string | number) => void;
  searchInput: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
}

export default function TeacheListHeader({
  sortOrder,
  updateParam,
  searchInput,
  setSearchInput,
}: TeacherListHeaderProps) {
  const [createTeacher, { loading }] = useMutation(CREATE_TEACHER);

  return (
    <div className="flex items-center justify-between">
      <div className="w-xs">
        <h1 className="font-semibold lg:block hidden">All Teachers</h1>
      </div>

      <div className="flex flex-col lg:flex-row w-full items-end lg:items-center justify-end  gap-2">
        <div className="rounded-full border border-gray-200 px-4 py-1 shadow-xs w-72  flex items-center  gap-2">
          <Search className="size-4 text-muted-foreground" />
          <input
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
              updateParam("search", e.target.value);
              updateParam("page", 1);
            }}
            placeholder="Search teacher..."
            className="border-none outline-none placeholder:text-muted-foreground placeholder:text-sm"
          />
        </div>

        <div className="flex items-center gap-2">
          <SortByDropdown updateParam={updateParam} />
          <Button
            onClick={() =>
              updateParam("sortOrder", sortOrder === "asc" ? "desc" : "asc")
            }
            className="bg-lightYellow hover:bg-yellow-400 text-black rounded-full"
          >
            {sortOrder === "asc" ? (
              <ArrowUpWideNarrow />
            ) : (
              <ArrowDownWideNarrow />
            )}
          </Button>
          <TeacherForm
            mode="create"
            loading={loading}
            onSubmit={async (values) => {
              createTeacher({
                variables: {
                  input: values,
                },
                onError: (err) => {
                  toast.error(err.message);
                  throw err;
                },
                onCompleted: () => {
                  toast.success("Teacher created successfully.");
                },
              });
            }}
          />
        </div>
      </div>
    </div>
  );
}
