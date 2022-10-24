import { Link } from '@remix-run/react'

interface Props {
  to: string
}

export const MainNavLi: React.FC<Props> = ({ to, children }) => {
  return (
    <li className="flex items-center m-0 p-0">
      <Link
        className="inline-block no-underline hover:underline"
        to={to}
        prefetch="intent"
      >
        {children}
      </Link>
    </li>
  )
}
