import DashboardNavbar from "@/Components/atoms/DashboardNavbar";
import DashboardSidebar from "@/Components/atoms/DashboardSidebar";
import React from "react";

const DashboardLayout = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

    const handleSidebar = () => {
        document.body.classList.toggle("overflow-hidden");
        setIsSidebarOpen((prev) => !prev);
    };

    return (
        <>
            <DashboardNavbar handleSidebar={handleSidebar} />
            <DashboardSidebar
                isSidebarOpen={isSidebarOpen}
                handleSidebar={handleSidebar}
            />

            <div class="p-4 sm:ml-72">
                <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-16">
                    {children}
                </div>
            </div>
        </>
    );
};

export default DashboardLayout;
