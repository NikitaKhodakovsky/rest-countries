import { FallbackProps } from 'react-error-boundary'

import { ErrorPage } from '../pages/ErrorPage'

export function FallbackPage({ resetErrorBoundary }: FallbackProps) {
	return (
		<div className='container'>
			<ErrorPage buttonText='Reload Page' onClick={resetErrorBoundary} />
		</div>
	)
}
