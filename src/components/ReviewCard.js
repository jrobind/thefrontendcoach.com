import { useWindowSize } from '../lib/hooks'; 


export default function ReviewCard() {
  const { width } = useWindowSize();

  return (
    <div className="mx-3 pb-7 text-center md:flex justify-center">
      <div className="review-card md:mr-6 mt-6 bg-no-repeat mb-5 md:mb-0 mx-auto md:ml-0">
        <div className="relative" style={{ minHeight: '94px'}}>
          <svg className="self-center absolute top-0 left-0" xmlns="http://www.w3.org/2000/svg" viewBox="-5 -7.5 24 24" width="60" height="60" fill="#5b5b5b" preserveAspectRatio="xMinYMin"><path d="M5,0 C5.55228475,0 6,0.44771525 6,1 C6,1.55228475 5.55228475,2 5,2 C4.10675603,2 3.3046917,2.39038643 2.7551155,3.0098508 C2.8358823,3.00332588 2.91755275,3 3,3 C4.65685425,3 6,4.34314575 6,6 C6,7.65685425 4.65685425,9 3,9 C1.34314575,9 0,7.65685425 0,6 L0,5 C0,2.23857625 2.23857625,0 5,0 Z M13,0 C13.5522847,0 14,0.44771525 14,1 C14,1.55228475 13.5522847,2 13,2 C12.106756,2 11.3046917,2.39038643 10.7551155,3.0098508 C10.8358823,3.00332588 10.9175527,3 11,3 C12.6568542,3 14,4.34314575 14,6 C14,7.65685425 12.6568542,9 11,9 C9.34314575,9 8,7.65685425 8,6 L8,5 C8,2.23857625 10.2385763,0 13,0 Z M3,5 C2.44771525,5 2,5.44771525 2,6 C2,6.55228475 2.44771525,7 3,7 C3.55228475,7 4,6.55228475 4,6 C4,5.44771525 3.55228475,5 3,5 Z M11,5 C10.4477153,5 10,5.44771525 10,6 C10,6.55228475 10.4477153,7 11,7 C11.5522847,7 12,6.55228475 12,6 C12,5.44771525 11.5522847,5 11,5 Z"></path></svg>
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
          <svg className="self-center absolute top-0 left-0" xmlns="http://www.w3.org/2000/svg" viewBox="-5 -7.5 24 24" width="60" height="60" fill="#5b5b5b" preserveAspectRatio="xMinYMin"><path d="M5,0 C5.55228475,0 6,0.44771525 6,1 C6,1.55228475 5.55228475,2 5,2 C4.10675603,2 3.3046917,2.39038643 2.7551155,3.0098508 C2.8358823,3.00332588 2.91755275,3 3,3 C4.65685425,3 6,4.34314575 6,6 C6,7.65685425 4.65685425,9 3,9 C1.34314575,9 0,7.65685425 0,6 L0,5 C0,2.23857625 2.23857625,0 5,0 Z M13,0 C13.5522847,0 14,0.44771525 14,1 C14,1.55228475 13.5522847,2 13,2 C12.106756,2 11.3046917,2.39038643 10.7551155,3.0098508 C10.8358823,3.00332588 10.9175527,3 11,3 C12.6568542,3 14,4.34314575 14,6 C14,7.65685425 12.6568542,9 11,9 C9.34314575,9 8,7.65685425 8,6 L8,5 C8,2.23857625 10.2385763,0 13,0 Z M3,5 C2.44771525,5 2,5.44771525 2,6 C2,6.55228475 2.44771525,7 3,7 C3.55228475,7 4,6.55228475 4,6 C4,5.44771525 3.55228475,5 3,5 Z M11,5 C10.4477153,5 10,5.44771525 10,6 C10,6.55228475 10.4477153,7 11,7 C11.5522847,7 12,6.55228475 12,6 C12,5.44771525 11.5522847,5 11,5 Z"></path></svg>
        </div>
        <div className="px-4 pb-3 text-left">
          <p className="text-tiny mt-3">James' explanations are clear even for someone non technical and he is extremely good at pointing me towards the proper resources to learn. He goes out of his way to guide me with numerous resources and best of all, he knows when information is not worth going into depth about based off of my personal goals. James will empower you, but only if you put in the work.</p>
          <h3 className="mt-2">– Daven</h3>
        </div>
      </div>
    </div>
  );
}