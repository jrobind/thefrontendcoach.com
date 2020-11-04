import { useState } from 'react';
import { NextSeo } from 'next-seo';
import { rootURL } from '../../lib/constants';
import classnames from 'classnames';


export default function Podcast() {
  const [loaded, setLoaded] = useState(false);
  
  const handleIframeLoad = () => setLoaded(true);

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
          <p className=" m-auto mt-4 mb-8 text-lg md:text-xl max-w-600">
            With Interviews, tips, advice on learning how to build your Front End skillset, getting your first job in the tech industry, and more!
          </p>
          <div style={{width: '800px', minHeight: '161px'}} className="shadow-md m-auto flex justify-center items-center flex-col">
            {!loaded && <span className="block text-xl">Loading episode...</span>}
            <iframe
              onLoad={handleIframeLoad}
              className={classnames({
                'hidden': !loaded,
                'm-auto': true
              })}
              src="https://anchor.fm/thefrontendcoach/embed/episodes/Welcome-to-The-Front-End-Coach-Podcast-elvm9t" 
              height="161px"
              width="800px"
              frameBorder="0" 
              scrolling="no"
              ></iframe> 
            </div>
        </div>
      </section>
    </div>
  )
}