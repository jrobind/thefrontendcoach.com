import Link from 'next/link'
import { HeadPost } from './HeadPost'

export const Post = ({ post }) => {
  const {
    link,
    module: { meta },
  } = post

  return (
    <>
      <article>
        <HeadPost meta={meta} />
        <Link href={link}>
          <a>Read more &rarr;</a>
        </Link>
      </article>
      <style jsx>
        {`
          article {
            margin-bottom: 3rem;
          }
        `}
      </style>
    </>
  )
}
