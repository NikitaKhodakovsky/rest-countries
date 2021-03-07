/* ---------------- UserTheme > PreferredTheme > DefaultTheme --------------- */

export type Theme = 'dark' | 'light'
type Subscriber = (v: Theme) => any

export class ThemeManager {
	private classList = document.getElementsByTagName('body')[0].classList
	private subscribers: Subscriber[] = []
	private currentTheme: Theme

	constructor(defaultTheme: Theme = 'light') {
		const prevTheme = localStorage.getItem('theme')

		this.currentTheme = prevTheme === 'dark' || prevTheme === 'light' ? prevTheme : defaultTheme
	}

	init(): void {
		const dark = window.matchMedia('(prefers-color-scheme: dark)')
		const light = window.matchMedia('(prefers-color-scheme: light)')

		if (light.matches) {
			this.setPreferredTheme('light')
		} else if (dark.matches) {
			this.setPreferredTheme('dark')
		}
		dark.addEventListener('change', (e) => e.matches && this.setPreferredTheme('dark'))
		light.addEventListener('change', (e) => e.matches && this.setPreferredTheme('light'))
		this.htmlSync()
	}

	private publish(): void {
		this.subscribers.forEach((s) => s(this.currentTheme))
	}

	subscribe(subscriber: Subscriber) {
		const index = this.subscribers.push(subscriber)
		return () => {
			this.subscribers = this.subscribers.splice(index, 1)
		}
	}

	htmlSync(): void {
		this.classList.remove('default', 'dark', 'light')
		this.classList.add(this.currentTheme)
	}

	private localStorageSync(): void {
		localStorage.setItem('theme', this.currentTheme)
	}

	setPreferredTheme = (theme: Theme): void => {
		const prevTheme = localStorage.getItem('theme')
		if (!prevTheme) {
			this.currentTheme = theme
			this.htmlSync()
			this.publish()
		}
	}

	setUserTheme = (theme: Theme): void => {
		this.currentTheme = theme
		this.htmlSync()
		this.localStorageSync()
		this.publish()
	}

	toggleUserTheme = (): void => {
		if (this.currentTheme === 'dark') {
			this.setUserTheme('light')
		} else if (this.currentTheme === 'light') {
			this.setUserTheme('dark')
		}
	}

	getTheme = (): Theme => {
		return this.currentTheme
	}
}
