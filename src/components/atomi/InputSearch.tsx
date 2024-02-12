const InputSearch = () => {
	return (
    
		<div className="relative mt-2 rounded-md shadow-sm w-96">
			{/* <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm">$</span>
        </div> */}
			<input
				type="text"
				name="plant"
				id="plant"
				className="block w-full rounded-full border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
				placeholder="Cerca una pianta"
			/>
		</div>
    
	);
};

export default InputSearch;
