/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import ThemeChanger from "../components/DarkSwitch";
import { Disclosure } from "@headlessui/react";

export default function Navbar() {
  const navigation = [
    { name: "Blog", route: "https://www.instagram.com/t2creditos/" },
    { name: "Crédito Consignado", route: "/payroll-loans" },
    { name: "Empréstimo", route: "/payroll-loans" },
  ];

  return (
    <div className="w-full bg-gradient-to-r from-orange-500 to-orange-700">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/" legacyBehavior>
                  <a className="flex items-center space-x-2 text-2xl font-bold text-white dark:text-gray-100">
                    <span>
                      <img
                        src="/img/logo.png"
                        alt="N"
                        width="32"
                        height="32"
                        className="w-10"
                      />
                    </span>
                    <span>T2 - Creditos</span>
                  </a>
                </Link>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-white rounded-md lg:hidden hover:text-white"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                    {navigation.map((item) => (
                      <Link key={item.name} href={item.route} legacyBehavior>
                        <a className="w-full px-4 py-2 -ml-4 text-white rounded-md dark:text-white hover:text-orange-400 focus:text-orange-400 hover:bg-slate-100 dark:hover:text-orange-400">
                          {item.name}
                        </a>
                      </Link>
                    ))}
                    {/* <Link href="/" legacyBehavior>
                      <a className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md lg:ml-5">
                        Login
                      </a>
                    </Link> */}
                    <div className="mt-3">
                      <ThemeChanger />
                    </div>
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu) => (
              <li className="mr-3 nav__item" key={menu.name}>
                <Link key={menu.name} href={menu.route} legacyBehavior>
                  <a className="inline-block px-4 py-2 text-lg font-normal text-white no-underline rounded-md dark:text-white hover:text-orange-400 focus:text-orange-400 hover:bg-slate-100 dark:hover:text-orange-400">
                    {menu.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          {/* <Link href="/" legacyBehavior>
            <a className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5">
              Login
            </a>
          </Link> */}
          <ThemeChanger />
        </div>
      </nav>
    </div>
  );
}
