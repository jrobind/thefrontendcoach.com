import { Twitter, Facebook, Linkedin } from 'react-social-sharing';

export default function({ rootURL, slug }) {
  return (
    <div className="flex">
      <Facebook solid small link={`${rootURL}blog/${slug}`}/>
      <Twitter solid small link={`${rootURL}blog/${slug}`}/>
      <Linkedin solid small link={`${rootURL}blog/${slug}`}/>
  </div>
  );
}
