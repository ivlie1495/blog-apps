import { Metadata, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'

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

	return <div>Hello, {params.slug}!</div>
}

export default Page
