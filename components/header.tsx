import Link from 'next/link'

const Header = () => {
	return (
		<header className="border border-yellow-400 p-20">
			<ul className="flex space-x-4">
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/about">About</Link>
				</li>
				<li>
					<Link href="/about/projects">Projects</Link>
				</li>
			</ul>
		</header>
	)
}

export default Header
