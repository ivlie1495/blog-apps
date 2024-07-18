const getData = async () => {
	return (
		await fetch('http://localhost:3001/repos', { cache: 'no-store' })
	).json()
}

const Page = async () => {
	const data = await getData()

	return (
		<div className="p-20">
			<h1 className="mb-8 text-xl">Projects</h1>
			<ul>
				{data.map((repo: any) => (
					<li key={repo.id} className="mb-4">
						<div>{repo.title}</div>
						<div>{repo.description}</div>
						<div>{repo.stargazers_count}</div>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Page
