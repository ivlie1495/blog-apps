'use client'

import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'

interface Props {
	pageCount: number
}

const Pagination = ({ pageCount }: Props) => {
	const pathname = usePathname()
	const searchParams = useSearchParams()
	const currentPage = Number(searchParams.get('page') ?? 1)

	const pages = Array.from({ length: pageCount }, (_, i) => i + 1)

	return (
		<ul className="flex justify-center space-x-4">
			{pages.map((pageNumber) => {
				const params = new URLSearchParams(searchParams)
				params.set('page', pageNumber.toString())

				return (
					<li key={pageNumber}>
						<Link
							href={`${pathname}?${params.toString()}`}
							className={`${pageNumber === currentPage ? 'underline decoration-gray-400 decoration-4 underline-offset-4' : ''}`}
						>
							{pageNumber}
						</Link>
					</li>
				)
			})}
		</ul>
	)
}

export default Pagination
