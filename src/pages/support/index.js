import { NextSeo } from 'next-seo';

export default function Support() {
  return (
    <main className="support">
      <NextSeo
        description="Don't learn alone. Find the support and help you need on your journey to becoming a Front End developer."
      />
      <section className="wrapper px-3 relative" style={{minHeight: '300px'}}>
        <div className="pb-7 flex justify-center">
          <div className="z-1 mt-5 md:mt-7" style={{maxWidth: '500px'}}>
            <h1 className="mb-5 text-3xl md:text-4xl text-center">Need some help?</h1>
            <p className="text-base md:text-lg text-center m-auto">Do you want to become a Front End Developer? Are you stuck? Have no idea where to start? Maybe you're further down the learning pathway and you need a hand with your portfolio? Not to worry! Help is on its way - <strong className="font-bold underline">see the support options below.</strong></p>
          </div>
        </div>
        <img className="w-full img-shadow absolute hidden md:block" alt="Man pondering a question" style={{maxWidth: '400px', right: '-64px', top: '32px'}} src="/images/question.svg"/>
      </section>

      <svg className="wave" viewBox="-606.652 143.223 1905.641 147.109" xmlns="http://www.w3.org/2000/svg">
        <path  d="M 826.337 25.54 C 678.546 84.297 603.696 68.787 447.802 35.144 C 293.343 1.811 137.334 1.811 0 1.811 L 0 150 L 1920 150 L 1920 1.811 C 1739.535 -16.685 1566.81 182.718 1378.127 82.941 C 1189.444 -16.836 974.129 -33.218 826.337 25.54 Z" fill="#2B8275" transform="matrix(1, 0, 0, 1, -615.011647, 153.801998)"/>
      </svg>
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

      <svg className="wave" viewBox="-605.588 168.766 1903.513 129.016" xmlns="http://www.w3.org/2000/svg">
        <path d="M 207.067 212.347 C 88.01 151.461 37.625 366.644 -167.21 260.215 C -298.471 192.014 -464.906 237.14 -615.012 293.548 L -615.012 145.359 L 1304.988 145.359 L 1304.988 293.548 C 1124.523 312.044 951.798 112.641 763.115 212.418 C 574.432 312.195 326.124 273.233 207.067 212.347 Z" style={{fill: 'rgb(43, 130, 117)'}}/>
      </svg>

      <section className="mentorship wrapper py-6 px-3">
        <div className="mb-3 relative flex justify-center md:block">
          <div className="text-base md:text-lg flex-col flex mt-4md:block md:mt-5" style={{maxWidth: '700px'}}>
            <h2 className="text-3xl">Direct mentorship</h2>
            <h4 className="text-xl mb-4 font-bold underline">Limited spots available</h4>
            <p className="my-3">For a limited number of students, I will be providing more focused mentorship support. This will involve weekly one-to-one video calls. For many students, the focus of these calls will be to help structure their learning pathway but for others, we may decide to point our focus elsewhere. This may include a range of different topics. For instance, specific Front End code related issues, portfolio/CV review, etc.</p>
            <p className="mb-3">To apply, please send an email to <strong className="font-bold">james@thefrontendcoach.com</strong> outlining a few things:</p>
            <ul>
              <li className="pb-2"><span className="bullet mr-1"></span> A brief introduction about yourself.</li>
              <li className="pb-2"><span className="bullet mr-1"></span> Why you want to become a Front End Developer.</li>
              <li><span className="bullet mr-1"></span> Your biggest blockers to learning and pursuing your goals at the current time.</li>
            </ul>
          </div>
          <img alt="Woman at computer on a video call with a man" className="absolute w-full img-shadow hidden z-0 md:block" style={{maxWidth: '400px', top: '32px', right: '-48px'}} width="300" src="/images/video-call.svg"/>
        </div>
      </section>
    </main>
  )
}