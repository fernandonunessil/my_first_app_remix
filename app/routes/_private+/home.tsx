import React from "react";
import { getAllUsers } from "api/user";
import { useLoaderData } from "react-router";

import SideBarComponent from "~/components/Sidebar/Sidebar";
import { json } from "@remix-run/node";

export const loader = async () => {
  const users = await getAllUsers();

  return json(users);
};

export default function home() {
  const users = useLoaderData();
  return (
    <div>
      <div>
        <SideBarComponent users={users} />
      </div>
    </div>
  );
}
