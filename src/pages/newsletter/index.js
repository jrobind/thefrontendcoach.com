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
          <h1 
            style={{maxWidth: 'fit-content', borderColor: '#F7B501', lineHeight: '1.2'}}
            className="m-auto border-b-4 text-3xl md:text-4xl text-center">Join the self-taught tips newsletter</h1>
          <div 
            className="m-auto mt-4 text-center text-xl md:text-2xl"
            style={{maxWidth: '650px'}}
          >
            <p className="mb-3">
              Learning to code is tough. Self-teaching is even tougher.
            </p>
            <p>
              Improve your learning process and <span className="font-bold">receive self-taught, learning tips every week</span>, straight to your inbox. 🙌
            </p>
          </div>
          </div>
        </section>
      </div>
  )
}