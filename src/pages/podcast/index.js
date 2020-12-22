import { useState } from 'react';
import { NextSeo } from 'next-seo';
import { rootURL } from '../../lib/constants';
import { useWindowSize } from '../../lib/hooks'; 
import Wave from '../../components/Wave';
import PodcastIframe from '../../components/PodcastIframe';


const episodeSlugs = [
  'Welcome-to-The-Front-End-Coach-Podcast-elvm9t',
  'From-Sport-Science-to-Software-Engineer-emmtjb',
  'Insights-from-a-Tech-Community-Lead-eo49a8'
];

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
        <PodcastIframe 
            slug={episodeSlugs[2]}
            loaded={loaded} 
            width={width} 
            handleIframeLoad={handleIframeLoad}
          />
          <div className="m-auto mt-4 mb-7 md:mt-5 md:mb-8 text-base md:text-lg" style={{maxWidth: '800px'}}>
            <p className="mb-3">In this episode, I interview <a className="underline text-main" href="http://mstrutt.co.uk">Michael Strutt</a>, a Tech Community Lead at <a className="underline text-main" href="https://p.ota.to/">Potato</a>. Michael shares his thoughts on what it takes to become a great developer, alongside tips regarding job applications and how to handle imposter syndrome. Michael has also written about mental health and development – please check out his <a className="underline text-main" href="https://dev.to/potatostudios_/one-engineer-s-journey-with-mental-health-17lh">recent article</a>.</p>
          </div>

          <PodcastIframe 
            slug={episodeSlugs[1]}
            loaded={loaded} 
            width={width} 
            handleIframeLoad={handleIframeLoad}
          />
          <div className="m-auto mt-4 mb-7 md:mt-5 md:mb-8 text-base md:text-lg" style={{maxWidth: '800px'}}>
            <p className="mb-3">In this episode, I interview <a className="underline text-main" href="https://www.linkedin.com/in/david-bayley-940762a5/">David Bayley</a>, a former Sport and Exercise Science graduate who is now a very successful software engineer for Lloyds Bank in London. David is a self-taught developer and has some fantastic insight into the tech world along with his own tips and advice for learning and breaking into the industry.</p>
          </div>

          <PodcastIframe 
            slug={episodeSlugs[0]} 
            loaded={loaded} 
            width={width}
            handleIframeLoad={handleIframeLoad}
          />
          <div className="m-auto mt-4 md:mt-5 text-base md:text-lg" style={{maxWidth: '800px'}}>
            <p className="mb-3">I am very excited to share with you the first episode of The Front End Coach Podcast! This very first episode is a little different in format from regular episodes. Instead, it’s an introduction to me, the podcast, what you can expect, and The Front End Coach itself.</p>
            <p className="mt-3">Any feedback, or requests for content I should cover in later episodes would be greatly appreciated. Please reach out to me at: <strong className="font-bold">james@thefrontendcoach.com</strong></p>
          </div>
        </section>
    </div>
  )
}