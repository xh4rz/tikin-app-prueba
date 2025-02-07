import Image from 'next/image';
import { HiMiniHome } from 'react-icons/hi2';
import { BiSolidContact } from 'react-icons/bi';
import { FaMoneyBillTransfer } from 'react-icons/fa6';
import { CardNotification, NavUser } from '.';
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem
} from '@/components/ui/sidebar';

// Menu items.
const items = [
	{
		title: 'Inicio',
		url: '/inicio',
		icon: HiMiniHome
	},
	{
		title: 'Contactos',
		url: '/contactos',
		icon: BiSolidContact
	},
	{
		title: 'Pagos',
		url: '/pagos',
		icon: FaMoneyBillTransfer
	}
];

export function AppSidebar() {
	return (
		<Sidebar>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel className="my-5">
						<Image
							src="/img/logo.png"
							width={100}
							height={80}
							alt="logo tikin"
							priority
						/>
					</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{items.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton asChild className="h-10">
										<a href={item.url}>
											<item.icon className="h-10 w-2" />
											<span>{item.title}</span>
										</a>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>

			<SidebarFooter>
				<CardNotification />
				<NavUser />
			</SidebarFooter>
		</Sidebar>
	);
}
