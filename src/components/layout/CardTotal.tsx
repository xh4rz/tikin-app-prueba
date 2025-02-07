import { FaEyeSlash } from 'react-icons/fa';

export const CardTotal = () => {
	return (
		<div className="flex rounded-md border p-1 w-[200px]">
			<div className="flex flex-col flex-1">
				<span className="text-xs text-muted-foreground">Balance total</span>
				<span className="text-sm font-semibold">$0</span>
			</div>

			<div className="flex items-center justify-center h-10 w-10 bg-gray-100 rounded-lg">
				<FaEyeSlash className="h-5 w-5 rounded-full " />
			</div>
		</div>
	);
};
