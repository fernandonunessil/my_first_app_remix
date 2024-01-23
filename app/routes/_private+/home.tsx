import React from "react";
import { getAllUsers } from "api/user";
import { useLoaderData } from "react-router";

import SideBarComponent from "~/components/Sidebar/Sidebar";
import { json } from "@remix-run/node";
import { User } from "types/api/user/type";

export const loader = async () => {
  const users = await getAllUsers();

  return json(users);
};

export default function home() {
  const users = useLoaderData() as User[];
  return (
    <div>
      <div>
        <SideBarComponent users={users} />
      </div>
    </div>
  );
}
