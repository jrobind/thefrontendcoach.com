import { NextSeo } from 'next-seo';
import { rootURL } from '../../lib/constants';


export default function Podcast() {
  return (
    <div className="podcast">
      <NextSeo
        title= "The Front End Coach Podcast"
        description="Listen to interviews, advice on learning how to build your Front-End skillset, getting your first job in the tech industry and more!"
        canonical={`${rootURL}podcast`}
      />
      <section className="wrapper px-3">
        <div className="my-5 md:my-7">
          <h1 className="text-3xl md:text-4xl text-center">The Front End Coach Podcast</h1>
          <p className=" m-auto mt-4 mb-6 text-lg md:text-xl max-w-600">
            With Interviews, tips, advice on learning how to build your Front End skillset, getting your first job in the tech industry, and more!
          </p>
          <h2 className="text-3xl mb-6">Episodes</h2>
          <div className="bg">
          <iframe src="https://anchor.fm/thefrontendcoach/embed/episodes/Welcome-to-The-Front-End-Coach-Podcast-elvm9t" height="102px" width="450px" frameBorder="0" scrolling="no"></iframe>
          </div>
        </div>
      </section>
    </div>
  )
}