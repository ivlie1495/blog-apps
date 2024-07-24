import fs from 'fs'
import Link from 'next/link'
import path from 'path'

import { getPost } from '@/libs/posts'

const Pages = async () => {
	const files = fs.readdirSync(path.join(process.cwd(), 'contents'))
	const posts = await Promise.all(
		files.map(async (file) => {
			const { frontmatter } = await getPost(file)

			return { frontmatter, slug: file.replace('.mdx', '') }
		}),
	)

	return (
		<div>
			<h1 className="mb-8 text-2xl font-semibold">Blog</h1>
			<div className="mb-8 text-lg text-gray-600">
				Stay up to date with my latest blog posts.
			</div>
			<ul className="grid grid-cols-1 gap-8 md:grid-cols-2">
				{posts.map(({ frontmatter, slug }) => (
					<li key={slug}>
						<Link href={`/blog/${slug}`} className="text-2xl font-semibold">
							{frontmatter.title as string}
						</Link>
						<div className="mt-2 text-sm">{frontmatter.date as string}</div>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Pages
