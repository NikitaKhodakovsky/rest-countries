import { createContext } from 'react'

import { ThemeManager } from '../services/ThemeManager'

const themeManager = new ThemeManager('light')
export const ThemeContext = createContext(themeManager)
