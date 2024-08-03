import Link from 'next/link'

import Pagination from '@/components/pagination'
import { getAllPosts } from '@/libs/posts'

interface Props {
	searchParams: {
		page?: string
		tags?: string
		newest?: string
		order?: string
		limit?: string
	}
}

const Pages = async ({ searchParams }: Props) => {
	const tags = searchParams.tags?.split(',')
	const order = searchParams.order ?? 'newest'
	const page = Number(searchParams.page ?? 1)
	const limit = Number(searchParams.limit ?? 3)

	const data = await getAllPosts({
		tags,
		newest: order === 'newest',
		page,
		limit,
	})

	return (
		<div>
			<h1 className="mb-8 text-2xl font-semibold">Blog</h1>
			<div className="mb-8 text-lg text-gray-600">
				Stay up to date with my latest blog posts.
			</div>
			<div className="mb-8">
				Display&nbsp;
				{order === 'newest' && (
					<Link href="/blog?order=oldest" className="underline">
						Oldest
					</Link>
				)}
				{order === 'oldest' && (
					<Link href="/blog?order=newest" className="underline">
						Newest
					</Link>
				)}
			</div>
			<ul className="grid grid-cols-1 gap-8 md:grid-cols-2">
				{data.posts.map(({ frontmatter, slug }) => (
					<li key={slug}>
						<Link href={`/blog/${slug}`} className="text-2xl font-semibold">
							{frontmatter.title as string}
						</Link>
						<div className="mt-2 text-sm">{frontmatter.date as string}</div>
					</li>
				))}
			</ul>
			<div className="mt-8">
				<Pagination pageCount={data.pageCount} />
			</div>
		</div>
	)
}

export default Pages
