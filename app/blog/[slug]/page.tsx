interface Props {
	params: {
		slug: string
	}
}

const Page = ({ params }: Props) => {
	return <div>Hello, {params.slug}!</div>
}

export default Page
