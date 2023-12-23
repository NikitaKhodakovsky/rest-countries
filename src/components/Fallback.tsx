import { FallbackProps } from 'react-error-boundary'
import { Navigate } from 'react-router-dom'

export function Fallback({ error, resetErrorBoundary }: FallbackProps) {
	resetErrorBoundary()
	return <Navigate to='error' />
}
