import classnames from 'classnames';

export default function PodcastIframe({ loaded, slug, width, handleIframeLoad, id }) {
  return (
    <div 
      style={{maxWidth: '800px', minHeight: `${width < 800 ? '98px' : '161px'}`}}
      className="shadow-md m-auto flex justify-center items-center flex-col"
      id={id}
    >
      {!loaded && <span className="block text-xl">Loading episode...</span>}
      <iframe
        onLoad={handleIframeLoad}
        className={classnames({
        'hidden': !loaded,
        'm-auto': true,
        'w-full': true
        })}
        src={`https://anchor.fm/thefrontendcoach/embed/episodes/${slug}`}
        height={`${width < 800 ? '98px' : '161px'}`}
        width="800px"
        frameBorder="0" 
        scrolling="no"
      ></iframe> 
    </div>
  );
}
  