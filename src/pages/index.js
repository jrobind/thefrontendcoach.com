import Link from "next/link";
import fs from "fs";
import { NextSeo } from "next-seo";
import BlogPost from "../components/BlogPost";
import { getAllBlogPosts } from "../lib/api";
import { rootURL } from "../lib/constants";
import Wave from "../components/Wave";
import ReviewCard from "../components/ReviewCard";

const Home = ({ slugs, posts }) => (
  <div className="landing">
    <NextSeo
      description="The Front End Coach is a unique support system created to help self-taught coders on their quest to become front-end developers."
      canonical={rootURL}
    />
    <section className="hero bg-main px-3 py-5 md:px-3">
      <div className="wrapper u-px-3 flex md:justify-between justify-center items-center">
        <div
          className="text-white flex flex-col md:mr-4"
          style={{ maxWidth: "650px" }}
        >
          <h1 className="text-shadow">
            The Help You Need To Start Your Career as a Front-End Developer
          </h1>
          <p className="my-3 text-lg md:text-xl">
            Thinking of becoming a front-end developer? The Front End Coach is
            here to help! A free support system to help you acquire the skills
            you need.
          </p>
          <Link href="/support">
            <a
              className="hero-cta text-xl md:text-2xl text-tertiary"
              style={{ width: "fit-content" }}
            >
              <span
                className="border-b-2 inline-block font-bold"
                style={{ lineHeight: "1.2" }}
              >
                See support options
              </span>
              <svg
                className="arrow ml-3 inline"
                width="27"
                height="24"
                fill="#FECB3E"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path
                  stroke="#FECB3E"
                  strokeWidth="2"
                  d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"
                />
              </svg>
            </a>
          </Link>
        </div>
        <img
          className="img-shadow hidden h-auto md:block"
          alt="Man inspecting code block"
          src="./images/web-development.svg"
          width="450"
          height="338"
        />
      </div>
    </section>
    <Wave alignment="bottom" />

    <section className="about md:px-3">
      <div className="wrapper px-3 md:px-0 py-7 md:py-8 bg-blob-home-dotted-1 flex flex-col md:flex-row md:justify-between items-center">
        <img
          className="rounded max-w-250 md:max-w-340 w-full img-shadow mb-3 md:mb-0"
          src="/images/james-robinson.jpeg"
          alt="Photo of James Robinson on a mountain"
        />
        <div className="md:max-w-600 md:ml-4">
          <h2 className="mb-3 text-2xl md:text-3xl">About James Robinson</h2>
          <p className="mb-5 text-base md:text-lg">
            Hey. I'm James Robinson, a self-taught front-end developer. I've
            been through the process myself, and I know just how frustrating and
            difficult it can be when first starting out. Since landing my first
            job in the industry I've worked on a variety of exciting projects,
            for high-profile industry-leading brands including Google. I'm here
            to share with you my honest, BS-free approach to acquiring the
            skills you <span className="font-bold">actually need</span> to
            become a front-end developer.
          </p>
          <Link href="/about">
            <a className="btn">MY JOURNEY</a>
          </Link>
        </div>
      </div>
    </section>

    <section
      className="services py-6 md:py-8"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.025)" }}
    >
      <div className="wrapper flex-col px-3">
        <div className="flex flex-col mb-5 md:flex-row justify-center">
          <div className="block justify-center flex-col mb-6 md:mb-3 items-center md:mr-7">
            <div className="flex justify-center items-center">
              <img
                className="m-auto block img-shadow"
                alt=""
                src="./images/coach.svg"
                style={{ maxWidth: "290px" }}
                width="450"
                height="350"
              />
            </div>
            <div className="text-center flex flex-1 flex-col items-center">
              <h3 className="font-bold font-medium mb-3 text-lg md:text-xl">
                Support
              </h3>
              <p
                className="mb-3 text-base md:text-lg"
                style={{ maxWidth: "380px" }}
              >
                Find the support you need by joining our Discord community.
                Alternatively, apply for a more personalised support.
              </p>
              <Link href="/support">
                <a className="btn">GET SUPPORT</a>
              </Link>
            </div>
          </div>
          <div className="flex flex-col mb-3 items-center">
            <div className="block justify-center items-center flex-1">
              <img
                className="m-auto block img-shadow"
                alt=""
                src="./images/radio-presenter.svg"
                style={{ width: "290px" }}
                width="450"
                height="350"
              />
            </div>
            <div className="flex 1 text-center flex flex-col items-center">
              <h3 className="font-bold mb-3 text-lg md:text-xl">Podcast</h3>
              <p
                className="mb-3 text-base md:text-lg"
                style={{ maxWidth: "380px" }}
              >
                Interviews, advice on learning how to build your front-end
                skillset, getting your first job in the tech industry and more!
              </p>
              <a className="btn" href="https://anchor.fm/thefrontendcoach">
                LISTEN NOW
              </a>
            </div>
          </div>
        </div>
        <article
          className="rounded p-3 mb-4 shadow-md bg-white mt-6 md:mt-7 bg-blog-blob-landing bg-cover"
          style={{ backgroundPosition: "-488px -271px" }}
        >
          <div>
            <h2 className="mb-4 m-auto text-2xl md:text-3xl">
              Latest blog posts
            </h2>
            <div className="flex justify-between grid gap-3 grid-cols-landing-blog-sm md:grid-cols-landing-blog-lg">
              <BlogPost posts={posts} limit={4} />
            </div>
            <Link href="/blog">
              <a className="btn">READ THE BLOG</a>
            </Link>
          </div>
        </article>
      </div>
    </section>

    <section className="wrapper px-3 mt-5 md:mt-6 my-7">
      <div className="flex flex-col md:flex-row md:justify-between items-center">
        <img
          className="block img-shadow"
          style={{ maxWidth: "450px" }}
          alt="Scrum board illustration"
          src="./images/scrum-board.svg"
        />
        <div className="md:max-w-600">
          <h2 className="mb-3 text-2xl md:text-3xl">
            Contribute to Open Source
          </h2>
          <p className="mb-5 text-base md:text-lg">
            The Front End Coach open source project has been set up to create a
            welcoming and friendly learning environment, so you can feel safe
            making mistakes. This is also an opportunity to receive feedback and
            guidance whilst collaborating with other developers.
          </p>
          <a href="https://github.com/jrobind/dev-jot" className="btn mt-5">
            GO TO PROJECT
          </a>
        </div>
      </div>
    </section>

    <section>
      <div className="wrapper px-3 mb-6 md:mb-8">
        <div className="px-3 pb-4 bg-main text-white rounded shadow-md">
          <img
            className="m-auto block"
            style={{ maxWidth: "400px" }}
            alt="Discord logo"
            src="./images/discord-logo.svg"
          />
          <div className="flex items-center flex-col mt-3 m-auto max-w-600">
            <p className="text-base md:text-lg mb-3 text-center">
              Don't learn in isolation! Join other like-minded, aspiring
              developers and myself. This is a highly inclusive and supportive
              community for those looking for help at whatever stage of their
              journey to become a front-end developer.
            </p>
            <a
              className="hero-cta text-xl md:text-2xl font-bold"
              style={{ width: "fit-content" }}
              href="https://discord.gg/YMsd9sgZ4f"
            >
              <span className="border-b-2">Join the community</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section className="wrapper mt-3">
      <div className="px-3">
        <h2 className="text-2xl md:text-3xl text-center">
          Mentee Testimonials
        </h2>
        <p className="m-auto text-center mb-5 mt-3 text-base md:text-lg max-w-600">
          1:1 sessions provide you with the right level of accountability and
          support to help you reach your development goals.
        </p>
        <a href="/support#direct-mentorship" className="btn mb-7 m-auto">
          APPLY NOW
        </a>
      </div>
      <ReviewCard />
    </section>
  </div>
);

export const getStaticProps = async () => {
  const files = fs.readdirSync("posts");

  return {
    props: {
      slugs: files.map((filename) => filename.replace(".md", "")),
      posts: getAllBlogPosts(),
    },
  };
};

export default Home;
