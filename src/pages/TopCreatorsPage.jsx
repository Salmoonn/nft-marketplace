import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import '../style/TopCreatorsPage.css'

import defaultAvatar from '../img/avatar.png'

import config from '../config.json'
const server = config.server;

function TopCreatorsPage() {
  const [topCreators, setTopCreators] = useState();

  useEffect(() => {
    fetch(server + '/topcreator')
      .then(r => r.json())
      .then(r => setTopCreators(r.slice(0, 20)))
  }, [])

  // console.log(topCreators)

  return (
    <div className="top-creators-page">
      <div className="top-creators-page-header wrapper column">
        <div className="h2 work-sans">Top Creators</div>
        <div className="text work-sans">
          Check out top ranking NFT artists on the NFT Marketplace.
        </div>
      </div>
      <div className='not-mobile'>
        <div className='top-creators-page-tab-bar wrapper'>
          <button className='top-creator-tab-bar-button'>
            <div className='text work-sans'>Today</div>
          </button>
          <button className='top-creator-tab-bar-button'>
            <div className='text work-sans'>This Week</div>
          </button>
          <button className='top-creator-tab-bar-button'>
            <div className='text work-sans'>This Month</div>
          </button>
          <button className='top-creator-tab-bar-button'>
            <div className='text work-sans'>All Time</div>
          </button>
        </div>
      </div>
      <div className='only-mobile'>
        <div className='top-creators-page-tab-bar wrapper'>
          <button className='top-creator-tab-bar-button'>
            <div className='text work-sans'>1d</div>
          </button>
          <button className='top-creator-tab-bar-button'>
            <div className='text work-sans'>7d</div>
          </button>
          <button className='top-creator-tab-bar-button'>
            <div className='text work-sans'>30d</div>
          </button>
          <button className='top-creator-tab-bar-button'>
            <div className='text work-sans'>All Time</div>
          </button>
        </div>
      </div>
      <RankingList topCreators={topCreators} />
    </div>
  )
}

function RankingList({ topCreators }) {
  return (
    <div className="ranking-list wrapper column">
      <div className="ranking-list-header space-mono">
        <div className='ranking-list-header-artist'>
          <div>#</div><div>Artist</div>
        </div>
        <div className='reanking-list-header-stats'>
          <div className='not-mobile'>Change</div>
          <div className='only-desktop'>NFTs Sold</div>
          <div>Volume</div>
        </div>
      </div>
      {topCreators?.map((e, i) => <TableArtist key={i} i={i} id={e} />)}
    </div>
  )
}

function TableArtist({ id, i }) {
  const [avatar, setAvtar] = useState(defaultAvatar)
  const [name, setName] = useState('Name')
  const [change, setChange] = useState(0)
  const [sold, setSold] = useState(0)
  const [volume, setVolume] = useState(0)

  useEffect(() => {
    fetch(server + '/' + id)
      .then(r => r.json())
      .then(r => {
        setName(r.name)
        setSold(r.sold ? r.sold : 0)
        setVolume(r.volume ? r.volume : 0)
      })
    setAvtar(server + '/a/' + id + '.png')
  }, [])

  return (
    <Link to={'/' + id}>
      <div className='ranking-list-artist space-mono smart'>
        <div className='ranking-list-artist-header'>
          <div className='ranking-list-artist-rank'>{i + 1}</div>
          <img src={avatar} />
          <div className='ranking-list-artist-name work-sans'>{name}</div>
        </div>
        <div className='ranking-list-artist-stats'>
          <div className='ranking-list-artist-stats-change not-mobile'>{change}%</div>
          <div className='ranking-list-artist-stats-sold only-desktop'>{sold}</div>
          <div className='ranking-list-artist-stats-volume'>{volume} ETH</div>
        </div>
      </div>
    </Link>
  )
}

export { TopCreatorsPage }