import { Skeleton } from '@/components/ui/skeleton'

const Loading = () => {
	return (
		<div className="p-20">
			<h1 className="mb-8 text-xl">Projects</h1>
			<ul>
				{Array.from({ length: 3 }).map((_, i) => (
					<li key={i} className="mb-4">
						<Skeleton className="h-14 w-full" />
					</li>
				))}
			</ul>
		</div>
	)
}

export default Loading
