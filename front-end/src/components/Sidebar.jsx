export default function Index({ setSettings }) {
	return (
		<div className="flex flex-col xl:flex:row my-4 w-1/5">
			<div
				className={`  border-r-2 border-white flex justify-start items-start overflow-y-auto min-h-screen max-h-screen flex-col`}
			>
				<div className="hidden xl:flex w-full justify-center p-6 items-center space-x-3">
					<p className="text-2xl leading-6 text-white">Neir Admin</p>
				</div>

				{/*Clothing*/}
				<button
					className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2 w-full"
					onClick={() => setSettings('Clothing')}
				>
					<p className="text-base leading-4">Clothing</p>
				</button>
				{/*Accessoires*/}
				<button
					className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2 w-full"
					onClick={() => setSettings('Props')}
				>
					<p className="text-base leading-4  ">Accessoires</p>
				</button>
				{/*Sérigraphies*/}
				<button
					className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2 w-full"
					onClick={() => setSettings('Serigraphy')}
				>
					<p className="text-base leading-4  ">Sérigraphies</p>
				</button>
				{/*Designs Persos*/}
				<button
					className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2 w-full"
					onClick={() => setSettings('Custom Design')}
				>
					<p className="text-base leading-4  ">Designs Persos</p>
				</button>
				{/*Galeries*/}
				<button
					className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2 w-full"
					onClick={() => setSettings('Galeries')}
				>
					<p className="text-base leading-4  ">Galeries</p>
				</button>
			</div>
		</div>
	);
}
