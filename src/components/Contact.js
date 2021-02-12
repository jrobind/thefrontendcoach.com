export default function Contact() {
  return (
    <>
      <section className="wrapper mt-3">
        <div className="mx-3 pb-7 text-center pt-6 md:pt-6 pt-3 border-t border-light-grey">
          <h2 className="mb-4 m-auto text-2xl md:text-3xl">Have any questions?</h2>
          <p className="mb-4 max-w-600 text-base md:text-lg">Learning to code is tough. Self-teaching is even tougher. Feel free to reach out if you have any questions, or if you just want to say 👋</p>
          <a
            className="btn bg-tertiary text-black text-base m-auto"
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:james@thefrontendcoach.com">
              GET IN TOUCH
            </a>
        </div>
        </section>
      </>
  );
}