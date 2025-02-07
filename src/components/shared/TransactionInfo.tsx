import { TransactionListItem } from './';

export const TransactionInfo = () => {
	return (
		<div>
			<div className="flex flex-row gap-3 mb-2">
				<h6 className="font-bold text-xl">Transacciones</h6>

				<a href="#" className="text-sm underline underline-offset-2">
					Ver todo
				</a>
			</div>

			<TransactionListItem />

			<TransactionListItem />

			<TransactionListItem />

			<TransactionListItem />

			<TransactionListItem />
		</div>
	);
};
