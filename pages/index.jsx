import CharacterSearch from '../components/CharacterSearch';
import FetchingModal from '../components/FetchingModal';
import Layout from '../components/Layout';
import Profile from '../components/Profile';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState, useEffect, useRef } from 'react';

const Index = props => {

  const [name, setName] = useState("");
  const [charId, setCharId] = useState();
  const [profile, setProfile] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [fetching, setFetching] = useState(false);

  const isFirstRun = useRef(true);
  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    fetchProfile();
  }, [charId])

  const handleChange = e => {
    setName(e.target.value);
  }

  // Fetch character by name in order to obtain Lodestone ID
  const fetchName = e => {
    e.preventDefault();
    setFetching(true);
    fetch("https://xivapi.com/character/search?name=" + name, {
      method: 'GET',
      headers:{'Content-Type': 'application/json'}
    })
    .then(res => {
        res.text().then(info => {
            let tmpData = JSON.parse(info);
            setCharId(tmpData.Results[0].ID);
            
        })
    })
    .catch(function(error) {
        console.log(error);
    })
  }

  // Fetch character profile by using the Lodestone ID
  const fetchProfile = () => {
    fetch("https://xivapi.com/character/" + charId + "?data=FC,FCM,CJ", {
      method: "GET",
      headers: {'Content-Type': 'application/json'}
    })
      .then(res => {
        res.text().then(info => {
          let tmpData = JSON.parse(info);
          console.log(tmpData.FreeCompany);
          setProfile(tmpData);
          setLoaded(true);
          setFetching(false);
          setName("");
        })
      })
      .catch(function(error) {
        console.log(error);
      })
  }

  return (
    <Layout>
      <div>
        <CharacterSearch name={name} handleChange={handleChange} fetchName={fetchName}/>
        {loaded ? <Profile profile={profile}/> : null}
        <FetchingModal fetching={fetching} setFetching={setFetching} />

        <style jsx>{`
          .center {
            text-align: center;
          }
        `}</style>
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