import { QueryClient, QueryClientProvider } from 'react-query'
import { ThemeManager, ThemeProvider } from 'react-theme-lib'
import { BrowserRouter as Router } from 'react-router-dom'
import { ReactQueryDevtools } from 'react-query/devtools'
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
