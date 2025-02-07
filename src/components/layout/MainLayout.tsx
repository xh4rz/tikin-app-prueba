import { AppSidebar } from './';
import { SidebarProvider } from '../ui/sidebar';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<SidebarProvider>
			<AppSidebar />

			{/* <div className="flex">
						<div className="flex flex-1">
							<SidebarTrigger />
						</div>

						<div>
							<AppBar />
						</div>
					</div> */}

			<div className="flex justify-center w-full">
				<div className="m-20 w-[800px]">{children} </div>
			</div>
		</SidebarProvider>
	);
};
