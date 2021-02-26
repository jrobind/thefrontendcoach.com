import { useWindowSize } from '../lib/hooks'; 


export default function ReviewCard() {
  const { width } = useWindowSize();

  return (
    <div className="mx-3 pb-7 text-center md:flex justify-center">
      <div className="review-card md:mr-6 mt-6 bg-no-repeat mb-5 md:mb-0 mx-auto md:ml-0">
        <div className="relative" style={{ minHeight: '94px'}}>
        <svg className="self-center absolute top-0 left-0 ml-1 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="45" height="45"><path fill="none" d="M0 0h24v24H0z"/><path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" fill="rgba(91,91,91,1)"/></svg>
          <svg className="rounded-t" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FAD367" fillOpacity="1" d="M0,160L40,181.3C80,203,160,245,240,224C320,203,400,117,480,90.7C560,64,640,96,720,138.7C800,181,880,235,960,245.3C1040,256,1120,224,1200,224C1280,224,1360,256,1400,272L1440,288L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
          <div className="border-solid absolute left-0 right-0 m-auto rounded-full overflow-hidden m-auto" style={{ width: '89px', height: '89px', top: '5px', borderColor: '#FAD367', borderWidth: '5px'}}>
            <img alt='' src={process.env.NEXT_PUBLIC_KY_AVATAR}/>
          </div>
        </div>
        <div className="px-4 pb-3 text-left mt-3">
          <p className="text-tiny">Before I started 1:1 mentoring sessions with James I would frequently lose dozens of hours trying to hunt down answers to simple questions. Talking to someone weekly has made the journey of becoming a self-taught developer much less lonely, I end our meetings absolutely brimming with renewed motivation, and when it comes to being self-taught, motivation is everything. Front-end development is a maze and James has the map.</p>
          <h3 className="mt-2">– Kyle</h3>
        </div>
      </div>
      <div className="review-card bg-no-repeat relative mx-auto md:mx-0" style={{ maxHeight: width < 700 ? 'none' : '350px' }}>
        <div className="relative" style={{ minHeight: "94px" }}>
          <svg className="rounded-t" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FAD367" fillOpacity="1" d="M0,288L60,272C120,256,240,224,360,213.3C480,203,600,213,720,197.3C840,181,960,139,1080,154.7C1200,171,1320,245,1380,282.7L1440,320L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
          <div className="border-solid absolute left-0 right-0 m-auto rounded-full overflow-hidden m-auto" style={{ width: '89px', height: '89px', top: '5px', borderColor: '#FAD367', borderWidth: '5px'}}>
            <img alt='' src={process.env.NEXT_PUBLIC_DV_AVATAR}/>
          </div>
          <svg className="self-center absolute top-0 left-0 ml-1 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="45" height="45"><path fill="none" d="M0 0h24v24H0z"/><path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" fill="rgba(91,91,91,1)"/></svg>
        </div>
        <div className="px-4 pb-3 text-left">
          <p className="text-tiny mt-3">James' explanations are clear even for someone non technical and he is extremely good at pointing me towards the proper resources to learn. He goes out of his way to guide me with numerous resources and best of all, he knows when information is not worth going into depth about based off of my personal goals. James will empower you, but only if you put in the work.</p>
          <h3 className="mt-2">– Daven</h3>
        </div>
      </div>
    </div>
  );
}