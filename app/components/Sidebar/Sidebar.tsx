import { User } from "types/api/user/type";

export default function SideBarComponent(users: User[]) {
  console.log(users);

  return (
    <div className="w-1/5 bg-dark_yellow h-screen">
      <div>
        <div></div>
      </div>
    </div>
  );
}
