import React, { useState } from "react";
import { MobileMenu, MobileSidebar, Sidebar as DesktopSidebar } from "../components";

const Layout = ({ children, currentPage }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <MobileSidebar current={currentPage} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <DesktopSidebar current={currentPage} />
      <div className="flex-1 overflow-auto focus:outline-none">
        <MobileMenu setSidebarOpen={setSidebarOpen} />
        <main className="flex-1 relative z-0 overflow-y-auto bg-black">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
