import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ProfiloDropdown from "../molecola/ProfiloDropdown";
import LogoCompany from "../atomi/LogoCompany";
import NavigationNames from "../molecola/NavigationNames";
import SlideMenu from "../molecola/SlideMenu";

const NavBar = () => {
  const navigation = [
    { name: "Home", href: "#", current: false },
    { name: "Le mie piante", href: "#", current: false },
    { name: "Contatti", href: "#", current: false },
  ];

  const [isSlideMenuOpen, setIsSlideMenuOpen] = useState(false);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="bg-teal-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 z-10">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <button
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setIsSlideMenuOpen(!isSlideMenuOpen)}
            >
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              {isSlideMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <LogoCompany />
            <div className="hidden sm:ml-6 sm:block space-x-4 my-auto">
              <NavigationNames classNames={classNames} navigation={navigation} />
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Profile dropdown */}
            <ProfiloDropdown classNames={classNames} />
          </div>
        </div>
      </div>

      {/* Renderiza el SlideMenu cuando isSlideMenuOpen es verdadero */}
      {isSlideMenuOpen && (
        <SlideMenu isOpen={isSlideMenuOpen} onClose={() => setIsSlideMenuOpen(false)} navigation={navigation} classNames={classNames} />
      )}
    </div>
  );
};

export default NavBar;
