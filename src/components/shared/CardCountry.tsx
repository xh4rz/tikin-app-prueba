import { Avatar, AvatarImage } from '../ui/avatar';

interface Props {
	i: {
		countryIcon: string;
		moneyAvailable: boolean;
		description: string;
		acronym: string;
	};
}

export const CardCountry = ({
	i: { description, countryIcon, moneyAvailable, acronym }
}: Props) => {
	return (
		<div className="bg-[#F6F6F6] w-[230px] h-[200px] rounded-xl p-4 flex flex-col">
			<div className="flex flex-1 justify-between">
				<Avatar className="h-16 w-16 border-[3px] border-[#D9D9D9]">
					<AvatarImage src={countryIcon} />
				</Avatar>

				{moneyAvailable ? (
					<span className="text-muted-foreground text-[12px] tracking-[.05em]">
						{acronym}
					</span>
				) : (
					<span className="text-[10px] tracking-[.05em]">
						<div className="bg-[#D9D9D9] rounded-xl p-1">Pronto</div>
					</span>
				)}
			</div>

			{moneyAvailable && (
				<div>
					<span className="text-muted-foreground">$</span>
					<span className="font-[500]">10.120.000,</span>
					<span className="font-[500] text-[12px]">75</span>
				</div>
			)}

			<div>
				<span className="text-muted-foreground text-[10px] tracking-[.05em]">
					{description}
				</span>
			</div>
		</div>
	);
};
