import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { PiWarningOctagonBold } from 'react-icons/pi';
import { IoIosArrowForward } from 'react-icons/io';

export const CustomAlert = () => {
	return (
		<>
			<Alert className="bg-[#FFF9E9]">
				<PiWarningOctagonBold className="h-5 w-5" color="#FFA733" />
				<IoIosArrowForward className="h-5 w-5" color="#FFA733" />
				<AlertTitle className="font-semibold mb-2 tracking-wide">
					Verifica tu identidad
				</AlertTitle>
				<AlertDescription className="text-xs opacity-[0.5]">
					Activa tus transferencia masivas verificando tu identidad en 5
					minutos.
				</AlertDescription>
			</Alert>
		</>
	);
};
