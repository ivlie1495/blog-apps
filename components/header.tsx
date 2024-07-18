import Link from 'next/link'

import Navigation from '@/components/navigation'

const Header = () => {
	return (
		<header className="mt-4 flex justify-between md:items-center">
			<div className="flex items-center md:space-x-12">
				<div className="hidden md:block">
					<Link href="/" className="text-2xl">
						Ivan Lie
					</Link>
				</div>
				<Navigation />
			</div>
			<div>Dark Toggle</div>
		</header>
	)
}

export default Header
