import React, { Fragment, Suspense } from 'react'
import { Helmet } from 'react-helmet'
import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { useTheme } from './hooks/useTheme'

const HomePage = React.lazy(() => import('./pages/HomePage'))
const CountryPage = React.lazy(() => import('./pages/CountryPage'))
const ErrorPage = React.lazy(() => import('./pages/ErrorPage'))
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage'))

//Prevent rerender of whole page when user change theme
const Head = () => {
	const theme = useTheme()
	return (
		<Helmet>
			<meta name='theme-color' content={theme === 'dark' ? '#003A70' : '#fff'} />
		</Helmet>
	)
}

export default function App() {
	return (
		<Fragment>
			<Head />
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
