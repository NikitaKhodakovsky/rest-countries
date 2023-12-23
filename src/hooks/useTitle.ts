import { useEffect, useState } from 'react'

export function useTitle(initial?: string) {
	const [title, setTitle] = useState(initial)

	useEffect(() => {
		const prev = document.title

		if (title) {
			document.title = title
		}

		return () => {
			document.title = prev
		}
	}, [title])

	return { title, setTitle }
}
