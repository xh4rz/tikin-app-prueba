import { ChevronRight } from 'lucide-react';
import { PiWarningOctagonBold } from 'react-icons/pi';

export const CardNotification = () => {
	return (
		<div className="flex rounded-md border p-2 bg-[#FFF9E9] ">
			<PiWarningOctagonBold className="h-5 w-5 mr-1" color="#FFA733" />
			<div className="flex-1">
				<h5 className="text-sm font-semibold mb-1">Verifica tu identidad</h5>
				<p className="text-xs text-muted-foreground">
					Activa tus transferencia masivas verificando tu identidad en 5
					minutos.
				</p>
			</div>
			<div className="flex items-center justify-center">
				<ChevronRight className="h-5 w-5 " />
			</div>
		</div>
	);
};
