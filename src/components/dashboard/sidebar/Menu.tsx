import {
  LayoutDashboard,
  GraduationCap,
  Users,
  User,
  BookOpen,
  ClipboardCheck,
  FileText,
  Bell,
  Calendar,
  CreditCard,
  Settings,
} from "lucide-react";
import { Link } from "react-router-dom";

const menuItems = [
  {
    title: "MAIN",
    items: [
      {
        icon: LayoutDashboard,
        label: "Dashboard",
        href: "/dashboard",
      },
    ],
  },
  {
    title: "MANAGEMENT",
    items: [
      {
        icon: GraduationCap,
        label: "Students",
        href: "/students",
      },
      {
        icon: Users,
        label: "Teachers",
        href: "/teachers",
      },
      {
        icon: User,
        label: "Parents",
        href: "/parents",
      },
      {
        icon: BookOpen,
        label: "Classes",
        href: "/classes",
      },
      {
        icon: BookOpen,
        label: "Subjects",
        href: "/subjects",
      },
    ],
  },
  {
    title: "ACADEMICS",
    items: [
      {
        icon: ClipboardCheck,
        label: "Attendance",
        href: "/attendance",
      },
      {
        icon: FileText,
        label: "Exams",
        href: "/exams",
      },
    ],
  },
  {
    title: "COMMUNICATION",
    items: [
      {
        icon: Bell,
        label: "Notices",
        href: "/notices",
      },
      {
        icon: Calendar,
        label: "Events",
        href: "/events",
      },
    ],
  },
  {
    title: "FINANCE",
    items: [
      {
        icon: CreditCard,
        label: "Fees",
        href: "/fees",
      },
    ],
  },
  {
    title: "SYSTEM",
    items: [
      {
        icon: Settings,
        label: "Settings",
        href: "/settings",
      },
    ],
  },
];

export default function Menu() {
  return (
    <div className="mt-4 text-sm w-full h-[95%] overflow-y-scroll hide-scrollbar">
      {menuItems.map((m) => (
        <div className="flex flex-col gap-2 " key={m.title}>
          <span className="hidden lg:block text-muted-foreground mt-6 mb-1">
            {m.title}
          </span>
          <div>
            {m.items.map((i) => (
              <Link
                key={i.label}
                className="flex items-center gap-4 text-muted-foreground py-2"
                to={i.href}
              >
                <i.icon width={20} height={20} />
                <span className="hidden md:block">{i.label}</span>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
