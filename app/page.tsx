'use client'

import { useState } from 'react'

import { Button } from '@/components/ui/button'

export default function Home() {
	const [isVisible, setIsVisible] = useState(true)
	const [names, setNames] = useState(['World'])

	const name = 'Ivan'

	const handleAdd = () => {
		setNames((prev) => [...prev, 'Universe'])
	}

	const handleClick = () => {
		setIsVisible((prev) => !prev)
	}

	const cards = isVisible && names.map((name) => <div key={name}>{name}</div>)

	return (
		<div>
			<div>Hello, {name}!</div>
			{cards}
			<Button onClick={handleClick}>{isVisible ? 'Hide' : 'Show'}</Button>
			<Button onClick={handleAdd}>Add</Button>
		</div>
	)
}
