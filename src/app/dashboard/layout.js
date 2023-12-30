import Link from "next/link"
import { Plus, Settings, Crosshair, User, Archive } from "feather-icons-react"

export default function DashboardLayout({ children }) {
	return (
		<div className="grid grid-rows-layout">
			<header className="px-4 max-h-[8vh] shadow-bottom leading-[8vh]">Ladninger</header>
			<main className="px-4 overflow-y-scroll">{children}</main>
			<nav className="flex justify-between items-center px-4 max-h-[8vh] leading-[8vh] shadow-top">
				<Link href="/dashboard" style={{marginTop: "-1em"}} className="flex flex-col items-center justify-between">
					<Crosshair />
					<small style={{height:"1em", marginTop:"-1.5em"}}>Ladninger</small>
				</Link>
				<Link href="/dashboard/materials" style={{marginTop: "-1em"}} className="flex flex-col items-center justify-between">
					<Archive />
					<small style={{height:"1em", marginTop:"-1.5em"}}>Krudt</small>
				</Link>	
				<Link href="/dashboard/create-load">
					<Plus className="border-black border-2 rounded-full w-8 h-8" />
				</Link>
				<Link href="/dashboard/settings" style={{marginTop: "-1em"}} className="flex flex-col items-center justify-between">
					<Settings />
					<small style={{height:"1em", marginTop:"-1.5em"}}>Indstillinger</small>
				</Link>
				<Link href="/dashboard/account" style={{marginTop: "-1em"}} className="flex flex-col items-center justify-between">
					<User />
					<small style={{height:"1em", marginTop:"-1.5em"}}>Profil</small>
				</Link>
			</nav>
		</div>
	)
}
