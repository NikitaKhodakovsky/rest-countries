import { Outlet } from 'react-router-dom'
import { Fragment } from 'react'

import { Header } from './Header'

interface LayoutProps {
	fixedHeader?: boolean
}

export function Layout({ fixedHeader }: LayoutProps) {
	return (
		<Fragment>
			<Header fixed={fixedHeader} />
			<div className='container'>
				<Outlet />
			</div>
		</Fragment>
	)
}
