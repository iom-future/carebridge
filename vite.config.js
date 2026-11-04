import process from 'node:process'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig(() => {
  let base = '/'
  if (process.env.GITHUB_ACTIONS && process.env.GITHUB_REPOSITORY) {
    const repoName = process.env.GITHUB_REPOSITORY.split('/')[1]
    base = repoName.endsWith('.github.io') ? '/' : `/${repoName}/`
  } else if (process.env.BASE_PATH) {
    base = process.env.BASE_PATH
  }

  return {
    base,
    plugins: [tailwindcss(), react()],
  }
})
