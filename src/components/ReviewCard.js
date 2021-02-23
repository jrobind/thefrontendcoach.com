export default function ReviewCard() {
  const reviews = [{
    name: 'Kyle',
    avatar: process.env.KY_REVIEW,
    reviewDesc: 'Before I started 1:1 mentoring sessions with James I would frequently lose dozens of hours trying to hunt down answers to simple questions, or flat out never find answers to certain industry "insider" questions. Talking to someone weekly has made the journey of becoming a self-taught developer much less lonely, I end our meetings absolutely brimming with renewed motivation, and when it comes to being self-taught, motivation is everything. Front-end development is a maze and James has the map.'
  }, {
    name: 'Daven',
    avatar: process.env.DV_REVIEW,
    reviewDesc: "I've been learning under James for 4 months as of this writing. James' explanations are clear even for someone non technical and he is extremely good at pointing me towards the proper resources to learn at an accelerated pace. Instead of spoon-feeding information, he goes out of his way to guide me with numerous resources. The one on one mentoring sessions are helpful because he's patient, and best of all, he knows when information is not worth going into depth about based off of my personal goals. James will empower you, but only if you put in the work. He's perfect for someone who can dedicate 10-15 hours a week towards learning.",
  }];

  return (
    <section className="wrapper mt-3">
      <div className="mx-3 pb-7 text-center">
        {reviews.map(({ name, avatar, reviewDesc }, i) => {
          return (
            <div className="card" key={i}>
              <p>{reviewDesc}</p>
              <div className="rounded-full overflow-hidden" style={{ width: '80px', height: '80px'} }>
                <img src={avatar}/>
              </div>
              <span>{name}</span>
            </div>
          )
        })}
      </div>
      </section>
  );
}