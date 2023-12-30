import Link from "next/link"
import { Plus, Settings, Crosshair, User, Archive } from "feather-icons-react"

export default function DashboardLayout({ children }) {
	return (
		<div className="grid grid-rows-layout">
			<header className="px-4 max-h-[8vh] shadow-bottom leading-[8vh]">Ladninger</header>
			<main className="px-4 overflow-y-scroll">{children}</main>
			<nav className="flex justify-between items-center px-4 max-h-[8vh] leading-[8vh] shadow-top">
				<Link href="/dashboard" className="flex flex-col items-center justify-between">
					<Crosshair />
					<small>Ladninger</small>
				</Link>
				<Link href="/dashboard/materials" className="flex flex-col items-center justify-between">
					<Archive />
					<small>Krudt</small>
				</Link>	
				<Link href="/dashboard/create-load">
					<Plus className="border-black border-2 rounded-full w-8 h-8" />
				</Link>
				<Link href="/dashboard/settings" className="flex flex-col items-center justify-between">
					<Settings />
					<small>Indstillinger</small>
				</Link>
				<Link href="/dashboard/account" className="flex flex-col items-center justify-between">
					<User />
					<small>Profil</small>
				</Link>
			</nav>
		</div>
	)
}
