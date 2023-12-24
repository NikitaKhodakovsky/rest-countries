import { useNavigate } from 'react-router-dom'

import { ErrorPage } from './ErrorPage/ErrorPage'

export function NotFoundPage() {
	const navigate = useNavigate()

	return <ErrorPage title='404' subtitle='Page not found.' buttonText='Go Home' onClick={() => navigate('/')} />
}
