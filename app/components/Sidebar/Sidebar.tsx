import { SidebarProps } from "types/app/components/Sidebar/type";
import { NavLink } from "@remix-run/react";

export default function SideBarComponent({ users }: SidebarProps) {
  return (
    <div className="w-1/5 bg-dark_yellow h-screen">
      <div>
        <div className="py-8">
          {users.map((row, i) => (
            <NavLink to={`/users/${row.code}`} key={i}>
              <p className="p-2 text-center bg-medium_yellow m-4 rounded">{row.name}</p>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}
