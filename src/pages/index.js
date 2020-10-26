import Link from "next/link";
import fs from "fs";
import Newsletter from "../components/Newsletter";

const Home = ({ slugs }) => (
  <main className="landing">
    <section className="hero bg-main px-3 py-4 md:px-3">
      <div className="wrapper u-px-3 flex justify-between items-center">
        <div className="text-white flex flex-col md:mr-4 max-w-750 md:max-w-600">
          <h1 className="text-3xl md:text-4xl">Get help starting your career as a <br/> Front End developer</h1>
          <p className="my-3 text-lg md:text-xl">
            Learning to code? Thinking of becoming a Front End developer? The Front End coach is here to help! A free support system to help you land your first development job.
          </p>
          <button className="btn btn--yellow">LEARN MORE</button>
        </div>
        <img className="img-shadow hidden md:block" alt="Man inspecting code block" src="./images/web-development.svg" width='450' height='450'/>
      </div>
    </section>
    <svg className="wave" viewBox="-605.588 168.766 1903.513 129.016" xmlns="http://www.w3.org/2000/svg">
      <path d="M 207.067 212.347 C 88.01 151.461 37.625 366.644 -167.21 260.215 C -298.471 192.014 -464.906 237.14 -615.012 293.548 L -615.012 145.359 L 1304.988 145.359 L 1304.988 293.548 C 1124.523 312.044 951.798 112.641 763.115 212.418 C 574.432 312.195 326.124 273.233 207.067 212.347 Z" style={{fill: 'rgb(43, 130, 117)'}}/>
    </svg>

    <section className="about px-3 py-7 md:py-8">
      <div className="wrapper flex flex-col md:flex-row md:justify-between px-3 justify-between">
        <img className="img-shadow w-full mb-3 md:mb-0 img-shadow" alt="Man inspecting code block" src="./images/npm.jpg" width='450' height='350' style={{maxWidth: '330px'}}/>
        <div className="md:max-w-600 md:ml-4">
          <h2 className="mb-3 text-3xl">About James Robinson</h2>
          <p className="mb-5 text-lg md:text-xl">
            Hey. I'm James Robinson, a self-taught Front End developer. I know just how frustrating and difficult it can be when first starting out. But over time, and through lots of trial and error, I’ve discovered learning strategies and other tips that work. And I’m here to share them with you and support you along the way. 
          </p>
          <a className="btn" href="./about.html">LEARN MORE</a>
        </div>
      </div>
    </section>

    <section className="services py-6 md:py-7" style={{backgroundColor: 'rgba(0, 0, 0, 0.025)'}}>
      <div className="wrapper flex-col px-3">
        <div className="flex flex-col mb-5 md:flex-row justify-center">
          <div className="flex justify-center flex-col mb-3 items-center md:mr-7">
            <div className="flex justify-center items-center">
              <img className="m-auto block img-shadow" alt="" src="./images/coach.svg" style={{maxWidth: '300px'}} width='450' height='350'/>
            </div>
            <div className="text-center flex flex-1 flex-col items-center">
              <h3 className="font-bold font-medium mb-3 text-xl">Support</h3>
              <p className="mb-3 text-center text-sm" style={{maxWidth: '350px'}}>
                Find the support you need by joining our Discord community, Facebook group, or apply for a more personalised support system.
              </p>
              <button className="btn">LEARN MORE</button>
            </div>
          </div>
          <div className="flex flex-col mb-3 items-center">
            <div className="flex justify-center items-center flex-1">
              <img className="m-auto block img-shadow" alt="" src="./images/radio-presenter.svg" style={{width: '300px'}} width='450' height='350'/>
            </div>
            <div className="flex 1 text-center flex flex-col items-center">
              <h3 className="font-bold mb-3 text-xl">Podcast</h3>
              <p className="mb-3 text-center text-sm" style={{maxWidth: '350px'}}>
                Interviews, tips and advice for learning how to build your Front End skillset, getting your first job in the tech industry and more!
              </p>
              <button className="btn">LISTEN NOW</button>
            </div>
          </div>
        </div>
        <div className="p-3 mb-3 shadow-md bg-white mt-6 md:mt-7 bg-blog-blob-landing bg-cover" style={{backgroundPosition: '-488px -271px'}}>
          <div>
            <h2 className="mb-4 m-auto text-3xl">Latest blog posts</h2>
            <div className="flex justify-between grid gap-3 grid-cols-landing-blog-sm md:grid-cols-landing-blog-lg">
              <div className="flex flex-col bg-white justify-between p-2 shadow-md rounded relative z-10" style={{height: '180px'}}>
                <div className="flex justify-between">
                  <span>October 2020</span>
                  <span className="pill text-xs">Starting</span>
                </div>
                <h3 className="text-m font-bold" style={{maxWidth: '300px'}}>Deciding where to start when you have absolutely no idea</h3>
                <a className="flex items-center" href="/">Read more <img alt="" src='./images/arrow-right.svg'/></a>
              </div>
              <div className="flex flex-col bg-white justify-between p-2 shadow-md rounded relative z-10" style={{height: '180px'}}>
                <div className="flex justify-between">
                  <span>October 2020</span>
                  <div className="ml-3">
                    <span className="pill text-xs">Learning</span>
                  </div>
                </div>
                <h3 className="text-m font-bold">How honesty can help improve your learning process</h3>
                <a className="flex items-center" href="/">Read more <img alt="" src='/images/arrow-right.svg'/></a>
              </div>
              <div className="flex flex-col bg-white justify-between p-2 shadow-md rounded relative z-10" style={{height: '180px'}}>
                <div className="flex justify-between">
                  <span>October 2020</span>
                  <div className="ml-3">
                    <span className="pill mr-1 text-xs">Process</span>
                    <span className="pill text-xs">Learning</span>
                  </div>
                </div>
                <h3 className="text-m font-bold">Understanding the limitations of web development tutorials</h3>
                <a className="flex items-center" href="/">Read more <img alt="" src='/images/arrow-right.svg'/></a>
              </div>
              <div className="flex flex-col bg-white justify-between p-2 shadow-md rounded relative z-10" style={{height: '180px'}}>
                <div className="flex justify-between">
                  <span>October 2020</span>
                  <div className="ml-3">
                    <span className="pill mr-1 text-xs">Starting</span>
                    <span className="pill text-xs">Process</span>
                  </div>
                </div>
                <h3 className="text-m font-bold">Why time isn't always the best metric of progress and skill</h3>
                <a className="flex items-center" href="/">Read more <img alt="" src='/images/arrow-right.svg'/></a>
              </div>
            </div>
            <a className="btn" href="/blog">READ THE BLOG</a>
          </div>
        </div>
      </div>

      <div className="wrapper px-3 pt-3 mb-4">
        <div className="px-3 pb-3 bg-main text-white mt-5 rounded shadow-md">
          <img className="m-auto block" style={{maxWidth: '400px'}} alt="Discord logo" src="./images/discord-logo.svg"/>
          <div className="flex items-center flex-col mt-3 m-auto max-w-600">
            <h4>JOIN THE DISCORD COMMUNITY</h4>
            <p className="mt-3 text-center">Don't learn in isolation! Join other like-minded, aspiring front end developers and myself. A highly inclusive and supportive community for those looking for help at whatever stage of their journey to become a front end developer.</p>
            <button className="btn mt-5">JOIN NOW</button>
          </div>
        </div>
      </div>
    </section>
    <Newsletter/>
  </main>
);

export const getStaticProps = async () => {
  const files = fs.readdirSync("posts");
  return {
    props: {
      slugs: files.map(filename => filename.replace(".md", ""))
    }
  };
};

export default Home;
