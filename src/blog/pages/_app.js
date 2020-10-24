import Layout from '../components/Layout'
import styles from '../styles.css';

const App = ({ title, description, ...props }) => {
  return (
    <Layout pageTitle={title}>
      <h1 className="title u-fs--giant">Welcome to my blog!</h1>
        <p className="description">
          {description}
        </p>
        <main>
          Posts go here!
        </main>
    </Layout>)
}

export default App;

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}