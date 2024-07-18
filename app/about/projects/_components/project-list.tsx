const getData = async () => {
	await new Promise((resolve) => setTimeout(resolve, 3000))

	return (
		await fetch('http://localhost:3001/repos', { cache: 'no-store' })
	).json()
}

const ProjectList = async () => {
	const data = await getData()

	return (
		<ul>
			{data.map((repo: any) => (
				<li key={repo.id} className="mb-4">
					<div>{repo.title}</div>
					<div>{repo.description}</div>
					<div>{repo.stargazers_count}</div>
				</li>
			))}
		</ul>
	)
}

export default ProjectList
