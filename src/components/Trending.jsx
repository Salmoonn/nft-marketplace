import "../style/trending.css"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import defaultAvatar from '../img/avatar.png'

// const path = require('../config.json')['server'] + '/img/'

import config from '../config.json';
const server = config.server;

function Trending() {
  const [coll, setColl] = useState()

  useEffect(() => {
    fetch(server + '/topcollection')
      .then(r => r.json())
      .then(r => setColl(r))
  }, [])

  return (
    <div className="trending wrapper column">
      <div className="trending-head column">
        <h3 className="work-sans">Trending Collection</h3>
        <div className="body-work">Checkout our weekly updated trending collection.</div>
      </div>
      <div className="trending-cards">
        {coll?.map((e, i) =>
          <CollectionCard key={i} id={e}
            visible={i == 0 ? '' : i == 1 ? 'not-mobile' : 'only-desktop'}
          />
        )}
      </div>
    </div>
  )
}

function CollectionCard({ visible = '', id, bg = '' }) {
  const [name, setName] = useState('Name');
  const [login, setLogin] = useState('');
  const [creator, setCreator] = useState('Creator');
  const [creatorAvatar, setCreatorAvatar] = useState(defaultAvatar)
  const [unit, setUnit] = useState([defaultAvatar, defaultAvatar, defaultAvatar]);
  const [total, setTotal] = useState();

  useEffect(() => {
    fetch(server + '/c/' + id)
      .then(r => r.json())
      .then(r => {
        setName(r.name);
        setUnit(r.body.filter((e, i) => i < 3).map(e => server + '/i/' + e + '.png'))
        setTotal(r.body.length);
        setCreatorAvatar(server + '/a/' + r.creator + '.png')
        setLogin(r.creator)

        fetch(server + '/' + r.creator)
          .then(r => r.json())
          .then(r => {
            setCreator(r.name)
          })

      })
  }, [])

  return (
    <div className={'trending-card column ' + visible}
      style={{ background: bg }}>
      <div className="trending-card-photos">
        <Link to="#"><img className="smart trending-card-photo-main" src={unit[0]}></img></Link>

        <div className="trending-card-frame">
          <Link to="#">
            <img className="smart" src={unit[1]} />
          </Link>
          <Link to="#">
            <img className="smart" src={unit[2]} />
          </Link>
          <Link to="#">
            <div className="trending-card-frame-number smart">
              <div className="space-mono h5">{total - 3}+</div>
            </div>
          </Link>
        </div>
      </div>
      <div className="collection-info column">
        <div className="work-sans h5">{name}</div>
        <Link to={login}>
          <div className="trending-artist-card">
            <img width={24} src={creatorAvatar}></img>
            <div className="base-body-work trending-artist-name">{creator}</div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Trending;
export { CollectionCard };