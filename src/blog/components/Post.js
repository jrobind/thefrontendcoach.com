import Link from 'next/link'
import { HeadPost } from './HeadPost'

export const Post = ({ post }) => {
  const {
    link,
    module: { meta },
  } = post

  return (
    <>
      <article className="post">
        <HeadPost meta={meta} />
        <Link href={'/blog' + link}>
          <a>Read more &rarr;</a>
        </Link>
      </article>
    </>
  )
}
