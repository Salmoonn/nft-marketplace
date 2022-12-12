import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { NftCard } from "../components/NftCard";
import { CollectionCard } from "../components/Trending";
import { TabBar } from "../components/TabBar";

import gb from "../img/globe.svg"
import ds from "../img/discord.svg"
import yt from "../img/youtube.svg"
import tw from "../img/twitter.svg"
import inst from "../img/instagram.svg"
import copy from "../img/copy.svg"
import plus from "../img/plus.svg"

import '../style/ArtistPage.css'

import config from '../config.json'
const server = config.server

function ArtistPage() {
  const params = useParams();

  const [banner, setBanner] = useState();
  const [avatar, setAvatar] = useState();
  const [name, setName] = useState();
  const [volume, setVolume] = useState(0);
  const [sold, setSold] = useState(0);
  const [followers, setFollowers] = useState(0);
  const [bio, setBio] = useState();
  const [cards, setCards] = useState([]);
  const [collection, setCollection] = useState([]);
  const [tabBar, setTabBar] = useState('Created');

  useEffect(() => {
    fetch(server + '/' + params.user)
      .then(r => r.json())
      .then(r => {
        setBanner(r.banner ? (server + r.banner) : '')
        setAvatar(server + '/a/' + r.login + '.png')
        setName(r.name)
        setBio(r.bio)
        setCards(r.item)
        setCollection(r.collection);
        if (r.volume) setVolume(r.volume);
        if (r.sold) setSold(r.sold)
        if (r.followers) setFollowers(r.followers)
      })
      .catch((err) => console.log(err))
  }, [])

  console.log(tabBar)

  return (
    <div className="artist-page">

      <div className='user-cover'>
        <img src={banner} className="user-cover-img" />
        <img src={avatar} className="user-avatar smart" />
      </div>

      <ArtistInfo name={name} volume={volume} sold={sold} followers={followers} bio={bio} />
      <TabBar
        tab={[
          { 'title': 'Created', 'value': cards.length },
          { 'title': 'Owned', 'value': cards.length },
          { 'title': 'Collection', 'value': collection.length },
        ]}
        active={tabBar}
        cb={setTabBar}
      />
      {
        {
          'Created': <ArtistCard cards={cards?.slice(0, 9)} />,
          'Owned': <ArtistCard cards={cards?.slice(0, 9)} />,
          'Collection': <ArtistCollection collection={collection} />
        }[tabBar]
      }
    </div>
  )
}

function ArtistInfo({ name, volume, sold, followers, bio }) {
  return (
    <div className="artist-info wrapper">
      <div className="artist-info-body column">
        <div className="artis-name h2 work-sans">{name}</div>
        <div className="not-desktop">
          <div className="artist-info-button">
            <button className="artist-but-link smart">
              <img src={copy} />
              <div className="work-sans">0xc0E3...B79C</div>
            </button>
            <button className="artist-but-follow smart">
              <img src={plus} />
              <div className="work-sans">Follow</div>
            </button>
          </div>
        </div>
        <div className="artist-stats">
          <div className="astist-volume">
            <div className="h4 space-mono">{volume}</div>
            <div className="text work-sans">Volume</div>
          </div>
          <div className="astist-sold">
            <div className="h4 space-mono">{sold}</div>
            <div className="text work-sans">NFTs Sold</div>
          </div>
          <div className="astist-follow">
            <div className="h4 space-mono">{followers}</div>
            <div className="text work-sans">Followers</div>
          </div>
        </div>

        <div className="artist-bio column">
          <div className="h5 space-mono">Bio</div>
          <div className="text work-sans">{bio}</div>
        </div>

        <div className="artist-links column">
          <div className="h5 space-mono">Links</div>
          <div className="artist-links-icons row">
            <Link to='/'><img src={gb} /></Link>
            <Link to='/'><img src={ds} /></Link>
            <Link to='/'><img src={yt} /></Link>
            <Link to='/'><img src={tw} /></Link>
            <Link to='/'><img src={inst} /></Link>
          </div>
        </div>

      </div>
      <div className="only-desktop">
        <div className="artist-info-button ">
          <button className="artist-but-link smart">
            <img src={copy} />
            <div className="work-sans">0xc0E3...B79C</div>
          </button>
          <button className="artist-but-follow smart">
            <img src={plus} />
            <div className="work-sans">Follow</div>
          </button>
        </div>
      </div>
    </div>
  )
}

function ArtistCard({ cards }) {
  return (
    <div className="artist-card-bg">
      <div className="artist-card wrapper">
        {cards?.map((e, i) => <NftCard key={i} id={e} bg="#2b2b2b"
          visible={'' + (i >= 6 ? 'only-desktop' : '') + (i >= 3 && i < 6 ? 'not-mobile' : '')} />)}
      </div>
    </div>
  )
}

function ArtistCollection({ collection }) {
  return (
    <div className="artist-card-bg">
      <div className="artist-card wrapper">
        {collection.map(e => <CollectionCard id={e} /*bg={'#2B2B2B'}*/ />)}
        {/* <CollectionCard id={collection} /> */}
      </div>
    </div>
  )
}

export { ArtistPage }