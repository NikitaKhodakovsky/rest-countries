import { Route, Routes } from 'react-router-dom'
import { Fragment, Suspense } from 'react'
import { useTheme } from 'react-theme-lib'
import { Helmet } from 'react-helmet'

import { Layout } from './components/Layout'

import { NotFoundPage } from './pages/NotFoundPage'
import { CountryPage } from './pages/CountryPage'
import { ErrorPage } from './pages/ErrorPage'
import { HomePage } from './pages/HomePage'

//Prevent rerender of whole page when user change theme
const Head = () => {
	const { theme } = useTheme()
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
