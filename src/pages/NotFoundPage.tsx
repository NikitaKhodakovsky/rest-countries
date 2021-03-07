import { useNavigate } from 'react-router-dom'

import { ErrorPage, ErrorPageProps } from './ErrorPage/ErrorPage'

export type NotFoundPageProps = Pick<ErrorPageProps, 'subtitle' | 'className'>

export function NotFoundPage({ subtitle = 'Page not found.', className }: NotFoundPageProps) {
	const navigate = useNavigate()

	return <ErrorPage className={className} title='404' subtitle={subtitle} buttonText='Go Home' onClick={() => navigate('/')} />
}
