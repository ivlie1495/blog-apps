import Link from 'next/link'

import { Button } from '@/components/ui/button'

const buttonLinkClass = 'p-0 md:p-1 text-2xl'

const Navigation = () => {
	return (
		<nav>
			<ul className="flex flex-col md:flex-row md:space-x-4">
				<li>
					<Button asChild variant="link" className={buttonLinkClass}>
						<Link href="/">Home</Link>
					</Button>
				</li>
				<li>
					<Button asChild variant="link" className={buttonLinkClass}>
						<Link href="/about">About</Link>
					</Button>
				</li>
				<li>
					<Button asChild variant="link" className={buttonLinkClass}>
						<Link href="/about/projects">Projects</Link>
					</Button>
				</li>
			</ul>
		</nav>
	)
}

export default Navigation
