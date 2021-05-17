import React from "react";
import { MenuAlt1Icon } from "@heroicons/react/outline";

const MobileMenu = ({ setSidebarOpen }) => {
  return (
    <>
      <div className="block lg:hidden">
        <div className="relative z-10 flex-shrink-0 flex h-16 bg-black">
          <button
            className="px-4 border-r border-gray-200 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <MenuAlt1Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
