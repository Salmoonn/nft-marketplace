import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import '../style/Collection.css'

import defaultAvatar from '../img/avatar.png'

import config from '../config.json'
const server = config.server

function Collection({ visible = '', id }) {
  const [name, setName] = useState('Name');
  const [login, setLogin] = useState('');
  const [creator, setCreator] = useState('Creator');
  const [creatorAvatar, setCreatorAvatar] = useState(defaultAvatar);
  const [total, setTotal] = useState();
  const [imageSrc, setImageSrc] = useState([]);
  const [image, setImage] = useState([]);
  // const [isLoad, setIsLoad] = useState([false, false, false])
  // const [mainImage, setMainImage] = useState(false);
  // const [otherImage, setOtherImage] = useState(false);
  // const [otherImage2, setOtherImage2] = useState(false);

  useEffect(() => {
    fetch(server + '/c/' + id)
      .then(r => r.json())
      .then(r => {
        setName(r.name);
        setTotal(r.body.length);
        setCreatorAvatar(server + '/a/' + r.creator + '.png')
        setLogin(r.creator)
        setImageSrc(r.body.slice(0, 3).map(e => server + '/i/' + e + '.png'))

        fetch(server + '/' + r.creator)
          .then(r => r.json())
          .then(r => setCreator(r.name))
      })
  }, [])

  return (
    <div className={'collection column ' + visible}>
      <div className="collection-photos">
        <CustomImage src={imageSrc[0]} main={true} />
        <div className="collection-frame">
          <CustomImage src={imageSrc[1]} />
          <CustomImage src={imageSrc[2]} />
          <Link to="/">
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
            <img className='artist-avatar' width={24} src={creatorAvatar}></img>
            <div className="base-body-work collection-artist-name">{creator}</div>
          </div>
        </Link>
      </div>
    </div>
  )
}

function CustomImage({ src, main = false }) {

  const color = {
    "--i": "#3b3b3b",
    "--j": "#4b4b4b"
  }

  const [isLoad, setIsLoad] = useState(false);

  const image = new Image()
  image.src = src
  image.onload = () => setIsLoad(true)

  return (
    <Link to='/'>
      {isLoad
        ? main
          ? <img src={src} className="collection-photo-main" />
          : <img src={src} className="collection-photo-other" />
        : main
          ? <div className="collection-photo-main "><AnimLoad /></div>
          : <div className="collection-photo-other"><AnimLoad /></div>
      }
    </Link>
  )
}

function AnimLoad() {
  const color = {
    "--i": '#333',
    "--j": '#393939'
  }
  return (
    <div className='anim-load' style={color} />
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