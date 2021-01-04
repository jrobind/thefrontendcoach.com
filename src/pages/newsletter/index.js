import { NextSeo } from 'next-seo';
import { rootURL } from '../../lib/constants';

export default function NewsletterPage() {
  return (
    <div className="newsletter-page">
      <NextSeo
        title= "The Front End Coach Newsletter"
        description="The Front End Coach is a unique support system created to help self-taught coders on their quest to become front-end developers."
        canonical={`${rootURL}newsletter`}
      />
      <section>
        <div className="pt-5 md:pt-7 wrapper px-3">
          <h1 className="text-3xl md:text-4xl text-center">The Front End Coach Newsletter</h1>
          <p className="m-auto mt-4 text-lg md:text-xl text-center" style={{ maxWidth: '500px' }}>
            Stay up-to-date with upcoming courses, articles, podcast episodes, and more 🙌
          </p>
          </div>
        </section>
      </div>
  )
}