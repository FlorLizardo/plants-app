import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { BookmarkIcon, EnvelopeIcon, HomeIcon, QueueListIcon, XMarkIcon } from "@heroicons/react/24/outline";


const SlideMenu = ({ isOpen, onClose, navigation, classNames }) => {
  const iconMenu = {
    Home: <HomeIcon className="h5 w-5" />,
    'Le mie piante': <BookmarkIcon className="h5 w-5"/>,
    Contatti: <EnvelopeIcon className="h5 w-5"/>
  }

	return (
		<Transition.Root show={isOpen} as={Fragment}>
			<Dialog as="div" className="fixed overflow-hidden" onClose={onClose}>
				<Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
				<Transition.Child
					as={Fragment}
					enter="transition-transform ease-in-out duration-700"
					enterFrom="-translate-x-full"
					enterTo="translate-x-0"
					leave="transition-transform ease-in-out duration-700"
					leaveFrom="translate-x-0"
					leaveTo="-translate-x-full"
				>
					<Dialog.Panel className="fixed inset-y-0 left-0 flex max-w-full pr-10">
						<div className="flex h-full flex-col overflow-y-scroll bg-teal-800 py-6 shadow-xl relative w-screen max-w-xs">
							<div>
								<button
									type="button"
									className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white float-right me-4"
									onClick={onClose}
								>
									<span className="absolute -inset-2.5" />
									<span className="sr-only">Close panel</span>
									<XMarkIcon className="h-6 w-6" aria-hidden="true" />
								</button>
							</div>
							<div className="space-y-1 px-2 pb-3 pt-2 sm:hidden">
								{navigation.map((item) => (
									<a
										key={item.name}
										href={item.href}
										className={classNames(
											item.current
												? "bg-gray-900 text-white"
												: "text-gray-300 hover:bg-gray-700 hover:text-white",
											"block rounded-md px-3 py-2 text-base font-medium border-b-2 flex gap-3"
										)}
										aria-current={item.current ? "page" : undefined}
									>
										{iconMenu[item.name]}{item.name}
									</a>
								))}
							</div>
						</div>
					</Dialog.Panel>
				</Transition.Child>
			</Dialog>
		</Transition.Root>
	);
};

export default SlideMenu;
