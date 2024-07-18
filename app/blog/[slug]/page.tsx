import { notFound } from 'next/navigation'

interface Props {
	params: {
		slug: string
	}
}

const Page = ({ params }: Props) => {
	if (params.slug !== 'test') {
		notFound()
	}

	return <div>Hello, {params.slug}!</div>
}

export default Page
