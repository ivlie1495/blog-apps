import Link from 'next/link'
import { notFound } from 'next/navigation'
import { cache } from 'react'

import { getPost as getPostFromLib } from '@/libs/posts'

const getPost = cache(async (slug: string) => await getPostFromLib(slug))

interface Props {
	params: {
		slug: string
	}
}

export const generateMetadata = async ({ params }: Props) => {
	const post = await getPost(`${params.slug}.mdx`)

	if (!post) {
		return null
	}

	return post.frontmatter
}

const Page = async ({ params }: Props) => {
	const post = await getPost(`${params.slug}.mdx`)
	const tags = post?.frontmatter?.tags as string[]

	if (!post) {
		notFound()
	}

	return (
		<article className="prose dark:prose-invert">
			<div className="mb-8 flex space-x-2">
				{tags.map((tag) => (
					<Link key={tag} href={`/blog?tags=${tag}`}>
						#{tag}
					</Link>
				))}
			</div>
			{post.content}
		</article>
	)
}

export default Page
