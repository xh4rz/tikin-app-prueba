import { CardCountry, TransactionInfo } from '@/components/shared';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const optionsCard = [
	{
		id: 1,
		countryIcon: '/img/colombia.png',
		moneyAvailable: true,
		description: 'PESO COLOMBIANO',
		acronym: 'COP'
	},
	{
		id: 2,
		countryIcon: '/img/united-states.png',
		moneyAvailable: false,
		description: 'US DOLLAR',
		acronym: 'Pronto'
	},
	{
		id: 3,
		countryIcon: '/img/european-union.png',
		moneyAvailable: false,
		description: 'EURO',
		acronym: 'Pronto'
	}
];

export default function Home() {
	return (
		<div className="flex flex-col gap-5">
			<div>
				<h6 className="text-xs mb-2 font-bold">BALANCE TOTAL</h6>
				<span className="text-3xl text-muted-foreground">$</span>
				<span className="font-[500] text-3xl">10.120.000,</span>
				<span className="font-[500] text-[16px]">75</span>
				<span className="text-muted-foreground text-[20px]"> COP</span>
			</div>

			<div>
				<Button className="mr-2 w-200 h-10 rounded-xl">
					Enviar dinero <ChevronDown />
				</Button>
				<Button className="w-200 h-10 rounded-xl" variant="outline">
					Recargar dinero
				</Button>
			</div>

			<div className="flex flex-row gap-5">
				{optionsCard.map((i) => (
					<CardCountry key={i.id} i={i} />
				))}
			</div>

			<div>
				<TransactionInfo />
			</div>
		</div>
	);
}
