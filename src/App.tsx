import { Route, Routes } from 'react-router-dom'
import { Fragment, Suspense } from 'react'

import { ThemeColorMeta } from './components/ThemeColorMeta'
import { Layout } from './components/Layout'

import { NotFoundPage } from './pages/NotFoundPage'
import { CountryPage } from './pages/CountryPage'
import { ErrorPage } from './pages/ErrorPage'
import { HomePage } from './pages/HomePage'

export default function App() {
	return (
		<Fragment>
			<ThemeColorMeta />
			<Suspense fallback={null}>
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route path='country/:code' element={<CountryPage />} />
						<Route path='error' element={<ErrorPage />} />
						<Route path='*' element={<NotFoundPage />} />
					</Route>
					<Route element={<Layout fixedHeader={true} />}>
						<Route index element={<HomePage />} />
					</Route>
				</Routes>
			</Suspense>
		</Fragment>
	)
}
