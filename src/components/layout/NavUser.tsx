import {
	BadgeCheck,
	Bell,
	ChevronRight,
	CreditCard,
	LogOut
} from 'lucide-react';
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '../ui/sidebar';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger
} from '../ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

export const NavUser = () => {
	return (
		<SidebarMenu className="rounded-md border">
			<SidebarMenuItem>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<SidebarMenuButton
							size="lg"
							className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
						>
							<Avatar className="h-8 w-8 rounded-lg">
								<AvatarImage
									src="https://avatars.githubusercontent.com/u/70307905?v=4"
									alt="logo avatar"
								/>
								<AvatarFallback className="rounded-lg">HG</AvatarFallback>
							</Avatar>
							<div className="grid flex-1 text-left text-sm leading-tight">
								<span className="truncate text-xs">¡Bienvenido!</span>
								<span className="truncate font-semibold">Harold Gonzalez</span>
							</div>

							<ChevronRight className="ml-auto size-4" />
						</SidebarMenuButton>
					</DropdownMenuTrigger>

					<DropdownMenuContent
						className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
						side={'right'}
						align="end"
						sideOffset={4}
					>
						<DropdownMenuGroup>
							<DropdownMenuItem>
								<BadgeCheck />
								Cuenta
							</DropdownMenuItem>
							<DropdownMenuItem>
								<CreditCard />
								Billetera
							</DropdownMenuItem>
							<DropdownMenuItem>
								<Bell />
								Notificaciones
							</DropdownMenuItem>
						</DropdownMenuGroup>
						<DropdownMenuSeparator />
						<DropdownMenuItem>
							<LogOut />
							Cerrar Sesión
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</SidebarMenuItem>
		</SidebarMenu>
	);
};
