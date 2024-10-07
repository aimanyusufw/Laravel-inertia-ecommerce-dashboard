import { Link } from "@inertiajs/react";
import React from "react";

const DashboardNavbar = ({ handleSidebar }) => {
    const [profileOpen, setProfileOpen] = React.useState(false);

    const handleButton = () => {
        console.log("test");

        setProfileOpen((prev) => !prev);
    };

    return (
        <>
            <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <div className="px-3 py-4 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start rtl:justify-end">
                            <button
                                type="button"
                                onClick={() => handleSidebar()}
                                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            >
                                <span className="sr-only">Open sidebar</span>
                                <svg
                                    className="w-6 h-6"
                                    aria-hidden="true"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        clipRule="evenodd"
                                        fillRule="evenodd"
                                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                                    ></path>
                                </svg>
                            </button>
                            <Link href="/" className="flex ms-2 md:me-24">
                                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                                    Zella Dashboard
                                </span>
                            </Link>
                        </div>
                        <div className="flex items-center">
                            <div className="flex items-center ms-3 relative">
                                <div>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setProfileOpen((prev) => !prev)
                                        }
                                        className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                                        aria-expanded={profileOpen}
                                        data-dropdown-toggle="dropdown-user"
                                    >
                                        <span className="sr-only">
                                            Open user menu
                                        </span>

                                        <div className="relative w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                                            <svg
                                                className="absolute w-10 h-10 text-gray-400 -left-1"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                                <div
                                    className={`z-50 ${
                                        profileOpen
                                            ? "absolute top-5 right-5"
                                            : "hidden"
                                    } my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600`}
                                    id="dropdown-user"
                                >
                                    <ul className="py-1" role="none">
                                        <li>
                                            <Link
                                                href="/profile"
                                                className="block px-6    py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                                role="menuitem"
                                            >
                                                Profile
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/"
                                                className="block px-6    text-nowrap py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                                role="menuitem"
                                            >
                                                Sign out
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            {profileOpen && (
                <div
                    onClick={() => handleButton()}
                    className={"fixed inset-0 z-40"}
                ></div>
            )}
        </>
    );
};

export default DashboardNavbar;
