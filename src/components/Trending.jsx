import "../style/trending.css"
import { useEffect, useState } from "react"
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
        {coll?.map(e => <CollectionCard key={e} id={e} />)}
      </div>
    </div>
  )
}

function CollectionCard({ visible = '', id }) {
  const [name, setName] = useState('Name');
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

        fetch(server + '/' + r.creator)
          .then(r => r.json())
          .then(r => {
            setCreator(r.name)
          })

      })
  }, [])

  return (
    <div className={'trending-card column ' + visible}>
      <div className="trending-card-photos">
        <a href="#"><img className="smart trending-card-photo-main" src={unit[0]}></img></a>

        <div className="trending-card-frame">
          <a href="#">
            <img className="smart" src={unit[1]} />
          </a>
          <a href="#">
            <img className="smart" src={unit[2]} />
          </a>
          <a href="#">
            <div className="trending-card-frame-number smart">
              <div className="space-mono h5">{total - 3}+</div>
            </div>
          </a>
        </div>
      </div>
      <div className="collection-info column">
        <div className="work-sans h5">{name}</div>
        <a href="#">
          <div className="trending-artist-card">
            <img width={24} src={creatorAvatar}></img>
            <div className="base-body-work trending-artist-name">{creator}</div>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Trending;