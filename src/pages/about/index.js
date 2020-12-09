import { NextSeo } from 'next-seo';
import Link from "next/link";
import { rootURL } from '../../lib/constants';
import Wave from '../../components/Wave';


export default function About() {
  return (
    <div className="about">
      <NextSeo
        title= "About the Front End Coach by James Robinson"
        description="Hi, I am James Robinson, a self-taught developer and the creator of The Front End Coach. The Front End Coach is a site to help beginners who are looking to become front-end developers."
        canonical={`${rootURL}about`}
      />
      <section className="wrapper px-3">
        <div className="mb-8">
          <div className="mt-6 md:mt-7 mb-5 md:mb-6 flex flex-col-reverse justify-center sm:flex-row items-center">
            <h1 className="flex justify-center flex-col text-main text-3xl md:text-4xl mt-4 md:mt-0 md:mr-3">
              Hey! <br/> I'm James Robinson,<br/> <span style={{minWidth:"250px"}} className="font-bold text-xl md:text-2xl mt-2 italic opacity-95">a self-taught<br/> front-end developer</span>
            </h1>
            <div>
              <img className="img-shadow relative w-full sm:ml-3" style={{maxWidth: "200px", maxHeight: "200px", minWidth: "150px"}} alt="Photo of man sitting on a mountain top" src="/images/james-robinson.jpeg"/>
            </div>
          </div>

          <div className="text-base md:text-lg m-auto max-w-600 md:max-w-750">
            <p className="my-3">I am a completely self-taught front-end developer. I do not have a computer science degree, nor have I ever paid for an expensive coding Bootcamp. After finding myself at a crossroads, I decided on a whim to give coding 'a go'. Three years later, and I haven't looked back. In the past, I've worked as a strength and conditioning coach, a night-shift warehouse worker and I've also pulled pints behind a bar. I've taught myself everything I needed to know using a glorious little thing called the internet.</p>
            <p>After less than a year of intensive learning, I managed to bag my first job as a junior front-end developer. Now, since working on a variety of exciting projects, for high-profile industry-leading brands such as Google, I want to share my journey and help aspiring developers get their first jobs in the industry. Having reflected on what worked well for me (and what didn't), I want to use my experience in the tech industry and my own learning processes to help you acquire the skills <strong className="font-bold underline">you actually need</strong>.
            </p>
          </div>
        </div>
      </section>

      <Wave alignment="top"/>
      <section className="bg-main text-white px-3 py-6">
        <div className="wrapper flex justify-between">
          <div className="w-full">
            <h2 className="text-3xl text-center md:text-left mb-4">Launching The Front End Coach</h2>
            <div className="text-base md:text-lg">
              <p className="max-w-750 m-auto md:my-3 md:mx-0">I've been through the process myself. Learning to code isn't easy and it's certainly not easy teaching yourself. Knowing where to start, what resources to use, and what to learn can become a real headache, fast. Trying to sift your way through the never-ending sea of guides, tutorials and blog posts can be off-putting, and quite frankly, damn right confusing.</p>
              <p className="max-w-750 m-auto mt-3">I've launched this site and support system to give you my BS-free, honest advice and support, helping you to learn only what <strong className="font-bold underline">you need to learn</strong> and in the most time-efficient way possible, helping to give you every chance at kick-starting your career as a front-end developer.</p>
            </div>
          </div>
          <img className="hidden md:block md:relative w-full img-shadow" alt="Man riding a rocket ship" style={{maxWidth: '400px', right: '-16px'}}src="/images/rocket-boy.svg"/>
        </div>
      </section>
      <Wave alignment="bottom"/>

      <section className="get-support wrapper pb-5 pt-5 px-3">
        <div className="mb-5">
          <div>
            <h2 className="text-3xl text-center">Get Support!</h2>
          </div>
          <div className="max-w-600 m-auto">
            <img className="m-auto mb-2 img-shadow block" style={{maxWidth: '340px'}} alt="" src="/images/team-work.svg"/>
            <p className="text-center mb-5 text-base md:text-lg">Get started by joining our Discord community, read some of the latest articles, and head over to the podcast for real world insight, interviews, and advice. Alternatively, if you want to reach out to me privately for anything, then please do - I'll get back to you as soon as I can.</p>
            <Link href="/support">
              <a className="btn m-auto">GET SUPPORT</a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}