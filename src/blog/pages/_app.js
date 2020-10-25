import Layout from '../components/Layout'
import styles from '../styles.css';

export default function App({ Component, props }) {
  return (
    <>
      <Layout pageTitle="Blog" description="My Personal Blog">
        <Component {...props} />
      </Layout>
    </>
  );
}


export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}