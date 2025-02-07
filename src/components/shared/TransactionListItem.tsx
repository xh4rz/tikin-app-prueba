import { TbArrowBigDownLines } from 'react-icons/tb';
import { Avatar, AvatarFallback } from '../ui/avatar';

export const TransactionListItem = () => {
	return (
		<div className="flex items-center mb-4">
			<Avatar className="h-12 w-12 mr-2">
				<AvatarFallback className="rounded-lg">
					<TbArrowBigDownLines size="25" />
				</AvatarFallback>
			</Avatar>

			<div className="flex flex-col flex-1">
				<span className="text-muted-foreground text-[12px]">
					Transferencia masiva
				</span>

				<span className="text-[14px]">-$1.405.458,55 COP</span>
			</div>

			<div className="flex flex-col">
				<span className="text-muted-foreground text-[12px]">Angel Botto</span>

				<span className="text-[14px] text-end">$bottico</span>
			</div>
		</div>
	);
};
