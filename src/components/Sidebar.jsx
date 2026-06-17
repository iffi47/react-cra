import { useState } from "react";
import Button from "./Button.jsx";

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState("");

  const menuItems = [
    { id: "project", label: "New Project", icon: "DB" },
    { id: "analytics", label: "Analytics", icon: "AN" },
    { id: "users", label: "Users", icon: "US" },
    { id: "settings", label: "Settings", icon: "ST" },
  ];

  return (
    <aside className="flex flex-col border-b border-black bg-stone-950 px-5 py-6 text-stone-50 md:min-h-screen md:w-72 md:border-b-0 md:border-r md:px-6 md:py-10">
      <div className="border-b border-black pb-6">
        <h1 className="text-2xl font-bold uppercase tracking-normal text-white md:text-xl">
          MyApp
        </h1>
        <p className="mt-2 text-sm text-stone-400">Project workspace</p>
      </div>

      <nav className="py-6">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                className={`sidebar-link ${
                  activeItem === item.id
                    ? "sidebar-link-active"
                    : "sidebar-link-idle"
                }`}
                onClick={() => setActiveItem(item.id)}
              >
                <span className="flex h-8 w-8 items-center justify-center border border-black bg-stone-100 text-xs font-bold text-stone-950">
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto border-t border-black pt-5">
        <div className="mb-4 flex items-center gap-3 border border-black bg-stone-900 px-4 py-3">
          <div className="flex h-10 w-10 items-center justify-center border border-black bg-white">
            <span className="font-bold text-stone-950">U</span>
          </div>
          <div>
            <p className="text-sm font-medium">User Name</p>
            <p className="text-xs text-stone-400">user@example.com</p>
          </div>
        </div>
        <Button className="w-full" variant="secondary">
          Logout
        </Button>
      </div>
    </aside>
  );
}
