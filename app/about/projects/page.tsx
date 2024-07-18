import { Suspense } from 'react'

import ProjectList from './_components/project-list'
import ProjectListLoading from './_components/project-list-loading'

const Page = async () => {
	return (
		<div>
			<h1 className="mb-8 text-xl">Projects</h1>
			<div className="mb-8">Hello, this is a project list page.</div>
			<Suspense fallback={<ProjectListLoading />}>
				<ProjectList />
			</Suspense>
		</div>
	)
}

export default Page
