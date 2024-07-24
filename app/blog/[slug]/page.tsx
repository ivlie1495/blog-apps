import { notFound } from 'next/navigation'
import { Suspense } from 'react'

import { getPost } from '@/libs/posts'

interface Props {
	params: {
		slug: string
	}
}

export const generateMetadata = async ({ params }: Props) => {
	const post = await getPost(`${params.slug}.mdx`)

	return post.frontmatter
}

const Page = async ({ params }: Props) => {
	let post

	try {
		post = await getPost(`${params.slug}.mdx`)
	} catch (error) {
		return notFound()
	}

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<article className="prose dark:prose-invert">{post.content}</article>
		</Suspense>
	)
}

export default Page
