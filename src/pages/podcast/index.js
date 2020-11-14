import { useState, useEffect } from 'react';
import { NextSeo } from 'next-seo';
import { rootURL } from '../../lib/constants';
import Wave from '../../components/Wave';
import classnames from 'classnames';


// Custom hook for returning current size of the browser window
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}


export default function Podcast() {
  const [loaded, setLoaded] = useState(false);
  const { width } = useWindowSize();
  
  const handleIframeLoad = () => setLoaded(true);

  return (
    <div className="podcast">
      <NextSeo
        title= "The Front End Coach Podcast"
        description="Listen to interviews, advice on learning how to build your front end skillset, getting your first job in the tech industry and more!"
        canonical={`${rootURL}podcast`}
      />
      <section className="bg-main">
        <div className="pt-5 md:pt-7 wrapper px-3 text-white">
          <h1 className="text-3xl md:text-4xl text-center">The Front End Coach Podcast</h1>
          <p className="m-auto mt-4 pb-6 text-lg md:text-xl max-w-600 text-center">
            With Interviews, tips, advice on learning how to build your Front End skillset, getting your first job in the tech industry, and more!
          </p>
          </div>
        </section>
        <Wave alignment="bottom"/>
        <section className="pt-8 pb-6 px-3">
          <div style={{maxWidth: '800px', minHeight: `${width < 800 ? '98px' : '161px'}`}} className="shadow-md m-auto flex justify-center items-center flex-col">
            {!loaded && <span className="block text-xl">Loading episode...</span>}
            <iframe
              onLoad={handleIframeLoad}
              className={classnames({
                'hidden': !loaded,
                'm-auto': true,
                'w-full': true
              })}
              src="https://anchor.fm/thefrontendcoach/embed/episodes/Welcome-to-The-Front-End-Coach-Podcast-elvm9t" 
              height={`${width < 800 ? '98px' : '161px'}`}
              width="800px"
              frameBorder="0" 
              scrolling="no"
              ></iframe> 
          </div>
          <div className="m-auto mt-4 md:mt-5 text-base md:text-lg" style={{maxWidth: '800px'}}>
            <p className="mb-3">I am very excited to share with you the first episode of The Front End Coach Podcast! This very first episode is a little different in format from regular episodes. Instead, it’s an introduction to me, the podcast, what you can expect, and The Front End Coach itself.</p>
            <p className="mt-3">Any feedback, or requests for content I should cover in later episodes would be greatly appreciated. Please reach out to me at: <strong className="font-bold">james@thefrontendcoach.com</strong></p>
          </div>
        </section>
    </div>
  )
}