import browserslistToEsbuild from 'browserslist-to-esbuild'
import inspect from 'vite-plugin-inspect'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
	plugins: [react(), svgr({ svgrOptions: { plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'] } }), inspect()],
	build: {
		target: browserslistToEsbuild()
	},
	resolve: {
		alias: {
			assets: '/src/assets'
		}
	}
})
