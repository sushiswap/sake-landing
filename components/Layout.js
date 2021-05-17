import React, { useState } from "react";
import { MobileMenu, MobileSidebar, Sidebar as DesktopSidebar } from "../components";
import { motion } from "framer-motion";

const Layout = ({ children, currentPage }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <MobileSidebar current={currentPage} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <DesktopSidebar current={currentPage} />
      <div className="flex-1 overflow-auto focus:outline-none">
        <MobileMenu setSidebarOpen={setSidebarOpen} />
        <main className="flex-1 relative z-0 overflow-y-auto bg-black pb-20 sm:pb-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.2,
            }}
          >
            {children}
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
