import type { LoaderFunction } from '@remix-run/cloudflare'
import { Link, useLoaderData } from '@remix-run/react'
import * as firstPost from './first-post.mdx'

// HTML =======================================================================
export default function BlogIndex() {
  const data = useLoaderData()
  console.log({ data })

  return (
    <div>
      <h1>Articles</h1>
      <ul>
        {data.map((post: any) => (
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
  return [postFromModule(firstPost)]
}
