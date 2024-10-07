import React from "react";
import NavMenuLink from "./NavMenuLink";
import {
    FaBasketShopping,
    FaChartPie,
    FaImage,
    FaUsers,
} from "react-icons/fa6";

const DashboardSidebar = ({ isSidebarOpen, handleSidebar }) => {
    return (
        <>
            <aside
                id="logo-sidebar"
                className={`fixed top-0 left-0 z-40 w-72 h-screen pt-20 transition-transform ${
                    isSidebarOpen ? "-translate-x-0" : "-translate-x-full"
                } bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
                aria-label="Sidebar"
            >
                <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        <NavMenuLink
                            label={"Dashboard"}
                            link={"/dashboard"}
                            icon={<FaChartPie />}
                        />
                        <NavMenuLink
                            label={"Product"}
                            link={"/products"}
                            icon={<FaBasketShopping />}
                            items={[
                                {
                                    label: "All Products",
                                    link: "/product",
                                },
                                {
                                    label: "Catgeories",
                                    link: "/categories",
                                },
                            ]}
                        />
                        <NavMenuLink
                            label={"Media"}
                            link={"/media"}
                            icon={<FaImage />}
                        />
                        <NavMenuLink
                            label={"Users"}
                            link={"/users"}
                            icon={<FaUsers />}
                            items={[
                                {
                                    label: "Create User",
                                    link: "/users   ",
                                },
                                {
                                    label: "Roles",
                                    link: "/roles",
                                },
                            ]}
                        />
                    </ul>
                </div>
            </aside>

            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-[30]"
                    aria-hidden="true"
                    onClick={handleSidebar}
                ></div>
            )}
        </>
    );
};

export default DashboardSidebar;
