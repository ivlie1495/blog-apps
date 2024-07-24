import { ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { Suspense } from 'react'
import fs from 'fs'
import path from 'path'

interface Props {
	params: {
		slug: string
	}
}

export const generateMetadata = async (
	{ params }: Props,
	parent: ResolvingMetadata,
) => {
	const description = (await parent).description ?? 'Default description'

	return {
		title: params.slug,
		description,
	}
}

const Page = ({ params }: Props) => {
	if (params.slug !== 'test') {
		notFound()
	}

	const markdown = fs.readFileSync(
		path.join(process.cwd(), 'contents', 'first.mdx'),
		'utf-8',
	)

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<article className="prose dark:prose-invert">
				<MDXRemote source={markdown} />
			</article>
		</Suspense>
	)
}

export default Page
