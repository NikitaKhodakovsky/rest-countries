import { ErrorBoundary } from 'react-error-boundary'
import { Route, Routes } from 'react-router-dom'

import { ThemeColorMeta } from './components/ThemeColorMeta'
import { Layout } from './components/Layout'

import { FallbackPage } from './pages/FallbackPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { CountryPage } from './pages/CountryPage'
import { HomePage } from './pages/HomePage'

export default function App() {
	return (
		<ErrorBoundary FallbackComponent={FallbackPage} onReset={() => window.location.reload()}>
			<ThemeColorMeta />
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route path='country/:code' element={<CountryPage />} />
					<Route path='*' element={<NotFoundPage className='mt-7' />} />
				</Route>
				<Route element={<Layout fixedHeader={true} />}>
					<Route index element={<HomePage />} />
				</Route>
			</Routes>
		</ErrorBoundary>
	)
}
