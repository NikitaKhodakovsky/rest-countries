import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ThemeManager, ThemeProvider } from 'react-theme-lib'
import { BrowserRouter as Router } from 'react-router-dom'
import ReactDOM from 'react-dom/client'

import App from './App'

import './sass/main.scss'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const queryClient = new QueryClient()

const themeManager = new ThemeManager({
	htmlElement: document.body
})

root.render(
	<ThemeProvider manager={themeManager}>
		<QueryClientProvider client={queryClient}>
			<Router>
				<App />
			</Router>
			<ReactQueryDevtools />
		</QueryClientProvider>
	</ThemeProvider>
)
