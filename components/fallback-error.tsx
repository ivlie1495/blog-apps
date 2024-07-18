'use client'

const FallbackError = ({ error }: { error: Error }) => {
	return <div>Something went wrong: {error.message}</div>
}

export default FallbackError
