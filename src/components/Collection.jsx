import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import '../style/Collection.css'

import defaultAvatar from '../img/avatar.png'

import config from '../config.json'
const server = config.server

function Collection({ visible = '', id, bg = '' }) {
  const [name, setName] = useState('Name');
  const [login, setLogin] = useState('');
  const [creator, setCreator] = useState('Creator');
  const [creatorAvatar, setCreatorAvatar] = useState(defaultAvatar);
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
    <div className={'collection column ' + visible}>
      <div className="collection-photos">
        <Link to="#"><img className="collection-photo-main smart" src={unit[0]}></img></Link>
        <div className="collection-frame">
          <Link to="#">
            <img className="collection-photo-other smart" src={unit[1]} />
          </Link>
          <Link to="#">
            <img className="collection-photo-other smart" src={unit[2]} />
          </Link>
          <Link to="#">
            <div className="collection-frame-number smart">
              <div className="space-mono h5">{total - 3}+</div>
            </div>
          </Link>
        </div>
      </div>
      <div className="collection-info column">
        <div className="work-sans h5">{name}</div>
        <Link to={login}>
          <div className="collection-artist-card">
            <img width={24} src={creatorAvatar}></img>
            <div className="base-body-work collection-artist-name">{creator}</div>
          </div>
        </Link>
      </div>
    </div>
  )
}

function CollectionSceleton({ color1, color2, visible = '' }) {

  const color = {
    "--i": color1,
    "--j": color2
  }

  return (
    <div className={'collection sceleton column ' + visible}>
      <div className="collection-photos">
        <div className="collection-photo-main" style={color} />
        <div className="collection-frame">
          <div className="collection-photo-other" style={color} />
          <div className="collection-photo-other" style={color} />
          <div className="collection-photo-other" style={color} />
        </div>
      </div>
      <div className="collection-info column">
        <div className="collection-name" style={color} />
        <div className="collection-artist-card">
          <div className='collection-artist-avatar' style={color} />
          <div className="base-body-work collection-artist-name" style={color} />
        </div>
      </div>
    </div>
  )
}

export { Collection, CollectionSceleton };