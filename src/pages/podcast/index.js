import { NextSeo } from 'next-seo';

export default function Podcast() {
  return (
    <main className="podcast">
      <NextSeo
        description="Listen to interviews, advice on learning how to build your Front End skillset, getting your first job in the tech industry and more!"
      />
      <section className="wrapper px-3">
        <div className="my-5 md:my-7">
          <h1 className="text-3xl md:text-4xl text-center">Episodes Coming soon!</h1>
        </div>
      </section>
    </main>
  )
}