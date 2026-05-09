import { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import { Outlet, useLocation } from "react-router-dom";
import { SideBar } from "./SideBar";
import Footer from "./Footer";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const outletRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    outletRef.current?.scrollTo({ top: 0 });
  }, [location]);

  // Close sidebar when location changes (user clicks on a link)
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Handle clicks outside sidebar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        !(event.target as Element).closest(".sidebar-toggle")
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  return (
    <div className="flex 2xl:container 2xl:mx-auto min-h-screen">
      {/* Overlay when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 lg:hidden"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          onClick={() => setIsOpen(false)}
        />
      )}
      <div ref={sidebarRef}>
        <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div className="flex flex-col w-full min-h-screen overflow-x-hidden">
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className="flex-1 overflow-auto no-scrollbar" ref={outletRef}>
          <Outlet />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
