import type { HeadersFunction, LoaderFunction } from '@remix-run/cloudflare'
import { json } from '@remix-run/cloudflare'
import { Link } from '@remix-run/react'

// HTML =======================================================================
export default function Index() {
  return (
    <div>
      <h1 className="">Hello World!</h1>
      <Link
        to="/now/"
        prefetch="intent"
      >
        Now
      </Link>
    </div>
  )
}

// REMIX ======================================================================
export const loader: LoaderFunction = ({ request }) => {
  const headers = new Headers()
  headers.append('Cache-Control', 'max-age=5, s-maxage=600')
  return json({}, { headers })
}

export const headers: HeadersFunction = ({ loaderHeaders }) => {
  return {
    'Cache-Control': loaderHeaders.get('Cache-Control') || 'no-cache',
  }
}
