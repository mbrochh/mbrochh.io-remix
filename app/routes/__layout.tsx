import type { LinksFunction } from '@remix-run/cloudflare'
import { Outlet } from '@remix-run/react'
import styles from 'highlight.js/styles/github-dark-dimmed.css'

// HTML =======================================================================
export default function Layout() {
  return (
    <main className="container mx-auto prose lg:prose-xl py-10 px-10 md:px-0">
      <Outlet />
    </main>
  )
}

// REMIX ======================================================================
export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: styles }]
}
