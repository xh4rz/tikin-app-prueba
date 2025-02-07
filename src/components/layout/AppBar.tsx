import { FaRegBell } from 'react-icons/fa';
import { CardTotal } from './CardTotal';

export const AppBar = () => {
	return (
		<div className="flex flex-row gap-4 items-center">
			<FaRegBell className="h-5 w-5" />
			<CardTotal />
		</div>
	);
};
