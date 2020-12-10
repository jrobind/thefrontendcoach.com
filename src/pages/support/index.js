import { NextSeo } from 'next-seo';
import { rootURL } from '../../lib/constants';
import Wave from '../../components/Wave';


export default function Support() {
  return (
    <div className="support">
      <NextSeo
        title= "The Front End Coach | Support options"
        description="Don't learn alone. Find the support and help you need on your journey to becoming a front-end developer."
        canonical={`${rootURL}support`}
      />
      <section className="wrapper px-3 relative" style={{minHeight: '300px'}}>
        <div className="pb-7 flex justify-center">
          <div className="z-1 mt-5 md:mt-7" style={{maxWidth: '500px'}}>
            <h1 className="mb-5 text-3xl md:text-4xl text-center">Need some help?</h1>
            <p className="text-base md:text-lg text-center m-auto">Do you want to become a front-end developer? Are you stuck? Have no idea where to start? Maybe you're further down the learning pathway and you need a hand with your portfolio? Not to worry! Help is on its way - <strong className="font-bold underline">see the support options below.</strong></p>
          </div>
        </div>
        <img 
          className="w-full img-shadow absolute hidden md:block"
          alt="Man pondering a question"
          height="300"
          width="400"
          style={{maxWidth: '400px', right: '-64px', top: '32px'}}
          src="/images/question.svg"
        />
      </section>

      <Wave alignment="top"/>
      <section className="discord bg-main text-white px-3 pt-5 pb-6">
        <div className="wrapper flex flex-col-reverse md:flex-row-reverse space-between items-center">
          <div className="md:ml-5">
            <h2 className="text-3xl mb-4 mt-3 md:max-w-600" style={{maxWidth: '500px'}}>Join The Front End Coach Discord Community</h2>
            <h3 className="mb-3 font-bold text-xl">Why should I join?</h3>
            <ul className="mb-4 text-base md:text-lg">
              <li className="pb-2"><span className="bullet mr-1"></span> It's completely free, which is always nice.</li>
              <li className="pb-2"><span className="bullet mr-1"></span> Get support from other newbie coders on a similar mission to you.</li>
              <li className="pb-2"><span className="bullet mr-1"></span> A safe environment where you can feel confident asking any questions.</li>
              <li className="pb-2"><span className="bullet mr-1"></span> Find out about the best resources to save you time and money.</li>
              <li><span className="bullet mr-1"></span> Ask me any questions you may have!</li>
            </ul>
            <a href="https://discord.gg/YMsd9sgZ4f" className="btn bg-tertiary text-black">JOIN NOW</a>
          </div>
          <img alt="Discord logo" style={{maxWidth: '330px'}} className="m-auto w-full" width="300" src="/images/discord-logo.svg"/>
        </div>
      </section>
      <Wave alignment="bottom"/>

      <section className="mentorship wrapper py-6 px-3">
        <div className="mb-3 relative flex justify-center md:block">
          <div className="text-base md:text-lg flex-col flex mt-4md:block md:mt-5" style={{maxWidth: '700px'}}>
            <h2 id="direct-mentorship" className="text-3xl">Direct mentorship</h2>
            <h4 className="text-xl mb-4 font-bold underline">All spots are currently filled</h4>
            <p className="my-3">For a limited number of students, I will be providing a more personalised support. This will be most suited to students who are struggling to progress with their learning or who are looking for more guidance on their CV, job applications, and portfolios.</p>
            <p className="mb-3">
              The format of this support will involve weekly one-to-one scheduled video calls. Direct mentorship can be incredibly rewarding for both parties. These sessions will help to provide you with the right level of accountability and support to help you reach your development goals.</p>
            <p className="mb-3"><span className="font-bold underline">To join the waiting list</span>, please send an email to <strong className="font-bold">james@thefrontendcoach.com</strong> outlining a few things:</p>
            <ul>
              <li className="pb-2"><span className="bullet mr-1"></span> A brief introduction, including information about your current progress and experience level.</li>
              <li className="pb-2"><span className="bullet mr-1"></span> Why you want to become a front-end developer.</li>
              <li><span className="bullet mr-1"></span> Your biggest blockers to learning and pursuing your goals at the current time.</li>
            </ul>
          </div>
          <img alt="Woman at computer on a video call with a man" className="absolute w-full img-shadow hidden z-0 md:block" style={{maxWidth: '400px', top: '32px', right: '-48px'}} width="300" src="/images/video-call.svg"/>
        </div>
      </section>
    </div>
  )
}