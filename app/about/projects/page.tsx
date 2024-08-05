import { Metadata } from 'next'
import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import FallbackError from '@/components/fallback-error'
import H1 from '@/components/h1'

import ProjectList from './_components/project-list'
import ProjectListLoading from './_components/project-list-loading'

export const metadata: Metadata = {
	title: 'Projects',
}

const Page = async () => {
	return (
		<div>
			<H1>Projects</H1>
			<div className="mb-8">Hello, this is a project list page.</div>
			<ErrorBoundary FallbackComponent={FallbackError}>
				<Suspense fallback={<ProjectListLoading />}>
					<ProjectList />
				</Suspense>
			</ErrorBoundary>
		</div>
	)
}

export default Page
