import { Trash } from "feather-icons-react"
import Link from "next/link"

export default function Home() {
	return (
		<ul>
			<li className="py-2 flex justify-between">
				<Link href="/dashboard/load/1">
					<div className="flex flex-col">
						Lapua Naturalis 6,5mm 140gr Match
						<small>26. december 2023</small>
					</div>
				</Link>
				<button><Trash /></button>
			</li>
			<li className="py-2 flex justify-between">
				<Link href="/dashboard/load/2">
					<div className="flex flex-col">
						Berger 6,5mm 144gr Long Range
						<small>3. november 2023</small>
					</div>
				</Link>
				<button><Trash /></button>
			</li>
		</ul>
	)
}
