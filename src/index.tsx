import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import App from './App'
import './sass/main.scss'
import { ThemeManager } from './services'
import { ThemeContext } from './contexts/themeContext'

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
