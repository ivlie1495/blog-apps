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

	if (!post) {
		notFound()
	}

	return <article className="prose dark:prose-invert">{post.content}</article>
}

export default Page
