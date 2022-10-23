import type { HeadersFunction, LoaderFunction } from '@remix-run/cloudflare'
import { json } from '@remix-run/cloudflare'
import { Link, useLoaderData } from '@remix-run/react'
import * as firstPost from './first-post.mdx'

// HTML =======================================================================
export default function BlogIndex() {
  const { posts } = useLoaderData()

  return (
    <div>
      <h1>Articles</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.slug}>
            <Link
              to={post.slug}
              prefetch="intent"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

// UTILS ======================================================================
const postFromModule = (mod: any) => {
  return {
    slug: mod.filename.replace('.mdx', ''),
    ...mod.attributes.meta,
  }
}

// REMIX ======================================================================
export const loader: LoaderFunction = () => {
  const headers = new Headers()
  headers.append('Cache-Control', 'max-age=5, s-maxage=600')
  return json({ posts: [postFromModule(firstPost)] }, { headers })
}

export const headers: HeadersFunction = ({ loaderHeaders }) => {
  return {
    'Cache-Control': loaderHeaders.get('Cache-Control') || 'no-cache',
  }
}
