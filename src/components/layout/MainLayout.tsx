import { AppBar, AppSidebar } from './';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '../ui/sidebar';
import { Separator } from '../ui/separator';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<SidebarProvider>
			<AppSidebar />

			<SidebarInset>
				<header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
					<SidebarTrigger className="-ml-1" />

					<div className="flex flex-1">
						<Separator orientation="vertical" className="mr-2 h-4" />
					</div>

					<AppBar />
				</header>
				<div className="flex flex-1 flex-col gap-4 p-4">
					<div className="flex justify-center w-full">
						<div className="mx-20 my-10 w-[800px]">{children} </div>
					</div>
				</div>
			</SidebarInset>
		</SidebarProvider>
	);
};
