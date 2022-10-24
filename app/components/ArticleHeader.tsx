interface Props {
  date: Date
  title: string
}

export const ArticleHeader: React.FC<Props> = ({ date, title }) => {
  return (
    <header>
      <h1 className="mb-0">{title}</h1>
      <p className="mt-1">
        <i>{date.toDateString()}</i>
      </p>
    </header>
  )
}
