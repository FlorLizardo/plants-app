import { BookmarkIcon, EnvelopeIcon, HomeIcon } from "@heroicons/react/24/outline";

const NavigationNames = ({navigation, classNames}) => {
	const iconMenu = {
    Home: <HomeIcon className="h5 w-5" />,
    'Le mie piante': <BookmarkIcon className="h5 w-5"/>,
    Contatti: <EnvelopeIcon className="h5 w-5"/>
  }


	return (
		// <div className="hidden sm:ml-6 sm:block">
			// <div className="hidden sm:ml-6 sm:block flex space-x-4">
				<>
			{navigation.map((item) => (
					<a
						key={item.name}
						href={item.href}
						className={classNames(
							item.current
								? "bg-gray-900 text-white"
								: "text-gray-300 hover:bg-gray-700 hover:text-white",
							"rounded-md px-3 py-2 text-sm font-medium"
						)}
						aria-current={item.current ? "page" : undefined}
					>
						{item.name}
					</a>
				))}
				</>	
			// </div>
		// </div>
	);
};

export default NavigationNames;
