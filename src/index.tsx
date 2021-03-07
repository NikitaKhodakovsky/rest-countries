import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter as Router } from 'react-router-dom'
import { ReactQueryDevtools } from 'react-query/devtools'
import ReactDOM from 'react-dom'

import { ThemeManager } from './services/ThemeManager'
import { ThemeContext } from './contexts/themeContext'

import App from './App'

import './sass/main.scss'

const queryClient = new QueryClient()

const themeManager = new ThemeManager('light')

themeManager.init()

ReactDOM.render(
	<ThemeContext.Provider value={themeManager}>
		<QueryClientProvider client={queryClient}>
			<Router>
				<App />
			</Router>
			<ReactQueryDevtools />
		</QueryClientProvider>
	</ThemeContext.Provider>,
	document.getElementById('root')
)
