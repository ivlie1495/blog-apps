import Link from 'next/link'

import { getAllPosts } from '@/libs/posts'

const Pages = async () => {
	const posts = await getAllPosts()

	return (
		<div>
			<h1 className="mb-8 text-2xl font-semibold">Blog</h1>
			<div className="mb-8 text-lg text-gray-600">
				Stay up to date with my latest blog posts.
			</div>
			<ul className="grid grid-cols-1 gap-8 md:grid-cols-2">
				{posts.map((post) => (
					<li key={post!.slug}>
						<Link
							href={`/blog/${post!.slug}`}
							className="text-2xl font-semibold"
						>
							{post!.frontmatter.title as string}
						</Link>
						<div className="mt-2 text-sm">
							{post!.frontmatter.date as string}
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Pages
