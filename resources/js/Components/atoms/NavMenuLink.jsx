import { Link } from "@inertiajs/react";
import React from "react";
import { FaChevronDown } from "react-icons/fa6";

const NavMenuLink = ({ label, link, icon, items = [] }) => {
    const [isItemOpen, setIsItemOpen] = React.useState(true);

    return (
        <li>
            {items.length > 0 ? (
                <>
                    <button
                        type="button"
                        onClick={() => setIsItemOpen((prev) => !prev)}
                        className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                        {icon}
                        <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                            {label}
                        </span>
                        <FaChevronDown
                            className={`w-3 h-3 ${
                                isItemOpen ? "rotate-0" : "rotate-180"
                            }`}
                        />
                    </button>
                    <ul
                        className={`${
                            isItemOpen ? "block" : "hidden"
                        }  py-2 space-y-2`}
                    >
                        {items.map((data, i) => (
                            <li key={i}>
                                <Link
                                    href={data.link}
                                    className="flex text-xs md:text-sm items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                >
                                    {data.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </>
            ) : (
                <Link
                    href={link}
                    className="flex items-center text-xs md:text-sm p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                    {icon}
                    <span className="ms-3">{label}</span>
                </Link>
            )}
        </li>
    );
};

export default NavMenuLink;
