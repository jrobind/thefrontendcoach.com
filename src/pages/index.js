import Link from "next/link";
import fs from "fs";
import { NextSeo } from 'next-seo';
import BlogPost from "../components/BlogPost";
import { getAllBlogPosts } from '../lib/api';


const Home = ({ slugs, posts }) => (
  <main className="landing">
    <NextSeo
      description="The Front End Coach is a support system to help budding developers on their quest to become Front End developers"
    />
    <section className="hero bg-main px-3 py-4 md:px-3">
      <div className="wrapper u-px-3 flex md:justify-between justify-center items-center">
        <div className="text-white flex flex-col md:mr-4 max-w-600 md:max-w-75- md:max-w-600">
          <h1 className="text-3xl md:text-4xl">Get help starting your career as a <br/> Front End Developer</h1>
          <p className="my-3 text-lg md:text-xl">
            Learning to code? Thinking of becoming a Front End developer? The Front End Coach is here to help! A free support system to help you acquire the skills you need.
          </p>
          <Link href="/support">
            <a className="btn btn--yellow">LEARN MORE</a>
          </Link>
        </div>
        <img className="img-shadow hidden md:block" alt="Man inspecting code block" src="./images/web-development.svg" width='450' height='450'/>
      </div>
    </section>
    <svg className="wave" viewBox="-605.588 168.766 1903.513 129.016" xmlns="http://www.w3.org/2000/svg">
      <path d="M 207.067 212.347 C 88.01 151.461 37.625 366.644 -167.21 260.215 C -298.471 192.014 -464.906 237.14 -615.012 293.548 L -615.012 145.359 L 1304.988 145.359 L 1304.988 293.548 C 1124.523 312.044 951.798 112.641 763.115 212.418 C 574.432 312.195 326.124 273.233 207.067 212.347 Z" style={{fill: 'rgb(43, 130, 117)'}}/>
    </svg>

    <section className="about px-3 py-7 md:py-8">
      <div className="wrapper flex flex-col md:flex-row md:justify-between items-center">
        <img className="max-w-250 md:max-w-330 img-shadow w-full mb-3 md:mb-0 img-shadow" alt="Man inspecting code block" src="./images/npm.jpg" width='450' height='350'/>
        <div className="md:max-w-600 md:ml-4">
          <h2 className="mb-3 text-3xl">About James Robinson</h2>
          <p className="mb-5 text-base md:text-lg">
            Hey. I'm James Robinson, a self-taught Front End Developer. I've been through the process myself, and I know just how frustrating and difficult it can be when first starting out. I'm here to share with you my honest, BS-free approach to acquiring the skills you <span className="font-bold underline">actually need</span> to become a Front End Developer.
          </p>
          <Link href="/about">
            <a className="btn">LEARN MORE</a>
          </Link>
        </div>
      </div>
    </section>

    <section className="services py-6 md:py-7" style={{backgroundColor: 'rgba(0, 0, 0, 0.025)'}}>
      <div className="wrapper flex-col px-3">
        <div className="flex flex-col mb-5 md:flex-row justify-center">
          <div className="flex justify-center flex-col mb-3 items-center md:mr-7">
            <div className="flex justify-center items-center">
              <img className="m-auto block img-shadow" alt="" src="./images/coach.svg" style={{maxWidth: '290px'}} width='450' height='350'/>
            </div>
            <div className="text-center flex flex-1 flex-col items-center">
              <h3 className="font-bold font-medium mb-3 text-xl">Support</h3>
              <p className="mb-3 text-base md:text-lg" style={{maxWidth: '380px'}}>
                Find the support you need by joining our Discord community. Alternatively, apply for a more personalised support.
              </p>
              <Link href="/support">
                <a className="btn">LEARN MORE</a>
              </Link>
            </div>
          </div>
          <div className="flex flex-col mb-3 items-center">
            <div className="flex justify-center items-center flex-1">
              <img className="m-auto block img-shadow" alt="" src="./images/radio-presenter.svg" style={{width: '290px'}} width='450' height='350'/>
            </div>
            <div className="flex 1 text-center flex flex-col items-center">
              <h3 className="font-bold mb-3 text-xl">Podcast</h3>
              <p className="mb-3 text-base md:text-lg" style={{maxWidth: '380px'}}>
                Interviews, advice on learning how to build your Front End skillset, getting your first job in the tech industry and more!
              </p>
              <Link href="/podcast">
                <a className="btn">LISTEN NOW</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="p-3 mb-4 shadow-md bg-white mt-6 md:mt-7 bg-blog-blob-landing bg-cover" style={{backgroundPosition: '-488px -271px'}}>
          <div>
            <h2 className="mb-4 m-auto text-3xl">Latest blog posts</h2>
            <div className="flex justify-between grid gap-3 grid-cols-landing-blog-sm md:grid-cols-landing-blog-lg">
              <BlogPost posts={posts} limit={4}/>
            </div>
            <Link href="/blog">
              <a className="btn">READ THE BLOG</a>
            </Link>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="wrapper px-3 pt-6 pb-5 mb-4">
          <div className="px-3 pb-3 bg-main text-white mt-5 rounded shadow-md">
            <img className="m-auto block" style={{maxWidth: '400px'}} alt="Discord logo" src="./images/discord-logo.svg"/>
            <div className="flex items-center flex-col mt-3 m-auto max-w-600">
              <h4 className="text-xl text-center">JOIN THE DISCORD COMMUNITY</h4>
              <p className="text-base md:text-lg mt-3 text-center">Don't learn in isolation! Join other like-minded, aspiring developers and myself. This is a highly inclusive and supportive community for those looking for help at whatever stage of their journey to become a Front End Developer.</p>
              <a href="https://discord.gg/YMsd9sgZ4f" className="btn mt-5">JOIN NOW</a>
            </div>
          </div>
        </div>
    </section>
  </main>
);

export const getStaticProps = async () => {
  const files = fs.readdirSync("posts");

  return {
    props: {
      slugs: files.map(filename => filename.replace(".md", "")),
      posts: getAllBlogPosts(),
    }
  };
};

export default Home;
