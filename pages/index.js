import CharacterSearch from '../components/CharacterSearch'
import Layout from '../components/Layout'

const Index = props => {
  return (
    <Layout>
      <div>
        <CharacterSearch />
      </div>
    </Layout>
    
  );
}

Index.getInitialProps = async function() {
  const res = await fetch('https://xivapi.com/servers/dc');
  const data = await res.json();

  return {
    ff14: data.Aether
  }
}

export default Index;