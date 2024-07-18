import { Star } from 'lucide-react'

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'

const getData = async () => {
	// await new Promise((resolve) => setTimeout(resolve, 3000))

	return (
		await fetch('http://localhost:3001/repos', { cache: 'no-store' })
	).json()
}

const ProjectList = async () => {
	const data = await getData()

	return (
		<ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
			{data.map((repo: any) => (
				<li key={repo.id} className="mb-4">
					<Card className="h-full">
						<CardHeader>
							<div className="flex items-center justify-between">
								<CardTitle>{repo.title}</CardTitle>
								<div className="flex items-center gap-2">
									<Star className="h-4 w-4" />
									{repo.stargazers_count}
								</div>
							</div>
						</CardHeader>
						<CardContent>
							<CardDescription>{repo.description}</CardDescription>
						</CardContent>
					</Card>
				</li>
			))}
		</ul>
	)
}

export default ProjectList
