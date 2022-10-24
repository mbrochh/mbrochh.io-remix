import { Outlet } from '@remix-run/react'
import { MainNavLi } from '~/components/MainNavLink'

// HTML =======================================================================
export default function Layout() {
  return (
    <div className="container mx-auto prose py-5 px-5 md:px-0">
      <header>
        <ul
          className="list-none flex items-center m-0 p-0 gap-3 flex-wrap"
          role="navigation"
          aria-label="Main navigation"
        >
          <MainNavLi to="/">
            <h2 className="p-0 m-0">mbrochh.io</h2>
          </MainNavLi>
          <MainNavLi to="/about/">About</MainNavLi>
          <MainNavLi to="/blog/">Blog</MainNavLi>
          <MainNavLi to="/now/">Now</MainNavLi>
        </ul>
      </header>
      <main className="mt-5">
        <Outlet />
      </main>
    </div>
  )
}
