import { ErrorBoundary } from 'react-error-boundary'
import { Outlet } from 'react-router-dom'
import { Fallback } from './Fallback'
import { Header } from './Header'

interface LayoutProps {
	fixedHeader?: boolean
}

export function Layout({ fixedHeader }: LayoutProps) {
	return (
		<ErrorBoundary FallbackComponent={Fallback}>
			<Header fixed={fixedHeader} />
			<div className='container'>
				<Outlet />
			</div>
		</ErrorBoundary>
	)
}
