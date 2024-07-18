import { Skeleton } from '@/components/ui/skeleton'

const ProjectListLoading = () => {
	return (
		<ul>
			{Array.from({ length: 3 }).map((_, i) => (
				<li key={i} className="mb-4">
					<Skeleton className="h-14 w-full" />
				</li>
			))}
		</ul>
	)
}

export default ProjectListLoading
