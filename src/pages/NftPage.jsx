import { Link, useParams } from "react-router-dom"
import '../style/NftPage.css'
import config from '../config.json'
import { useEffect, useState } from "react";
import globe from '../img/globe.svg'

const server = config.server;

function NftPage() {
  const params = useParams();

  const banner = server + '/img/' + params.id + '.png'

  const [name, setName] = useState('NFT Name');
  const [minted, setMinted] = useState(new Date());
  const [creator, setCreator] = useState('Creator');
  const [description, setDescription] = useState();
  const [tags, setTags] = useState();
  const [avatar, setAvatar] = useState();

  useEffect(() => {
    fetch(server + '/unit/' + params.id)
      .then(r => r.json())
      .then(r => {
        setName(r.name);
        setMinted(new Date(r.minted));
        setTags(r.tags);
        setAvatar(server + '/avatar/' + r.creator + '.png');

        fetch(server + '/' + r.creator)
          .then(r => r.json())
          .then(r => setCreator(r.name))

        fetch(server + '/d/' + params.id + '.txt')
          .then(r => r.ok ? r.text() : '')
          .then(r => setDescription(r))
          .catch((err) => console.log(err))
      })
  }, [])

  return (
    <div className="nft-page">
      <div className="nft-cover">
        <img src={banner} />
      </div>
      <NFTInfo key={name} name={name} minted={minted} creator={creator} description={description} tags={tags} avatar={avatar} />
    </div>
  )
}

function monthToString(num) {
  switch (num) {
    case 0: return 'Jan';
    case 1: return 'Feb';
    case 2: return 'Mar';
    case 3: return 'Apr';
    case 4: return 'May';
    case 5: return 'Jun';
    case 6: return 'Jul';
    case 7: return 'Aug';
    case 8: return 'Sep';
    case 9: return 'Oct';
    case 10: return 'Nov';
    case 11: return 'Dec';
  }
}

function NFTInfo({ name, minted, creator, description, tags, avatar }) {
  return (
    <div className="nft-info wrapper">
      <div className="nft-info-body column">
        <div className="nft-info-headline column">
          <div className="h2 work-sans">{name}</div>
          <div className="nft-minted work-sans">Minted On {monthToString(minted.getMonth())} {minted.getDay()}, {minted.getFullYear()}</div>
        </div>
        <div className="nft-info-additional column">
          <div className="nft-info-created column">
            <div className="title">Created By</div>
            <div className="nft-info-created-creater">
              <img src={avatar} className="nft-avatar" />
              <div className="work-sans">{creator}</div>
            </div>
          </div>
          <div className="nft-info-description column">
            <div className="title">Description</div>
            <pre className="text work-sans">{description}</pre>
          </div>
          <div className="nft-info-details column">
            <div className="title">Details</div>
            <div className="nft-info-details column">
              <div className="nft-detail">
                <img src={globe} className="nft-details-icon" />
                <div className="work-sans">View on Etherscan</div>
              </div>
              <div className="nft-detail">
                <img src={globe} className="nft-details-icon" />
                <div className="work-sans">View Original</div>
              </div>
            </div>
          </div>
          <div className="nft-info-tags column">
            <div className="nft-info-tags-title work-sans">Tags</div>
            <div className="nft-tags">
              {tags?.map((e) => <Link to='/' key={e}>{
                <div className="nft-tag work-sans">{e.toUpperCase()}</div>
              }</Link>)}
            </div>
          </div>
        </div>
      </div>
      <div className="nft-timer">
        <AuctionTime />
      </div>
    </div>
  )
}

function AuctionTime() {
  const [time, setTime] = useState(new Date(24 * 60 * 60 * 1000))

  useEffect(() => {
    setTimeout(() => setTime(new Date(time - 1000)), 1000)
  }, [time])

  return (
    <div className="timer">
      <div className="caption-space" style={{ color: '#fff' }}>
        Auction end in:
      </div>
      <div className="timer-body">
        <div className="timer-time">
          <div className="space-mono h3">{time.getUTCHours()}</div>
          <div className="caption-space" style={{ color: '#fff' }}>Hours</div>
        </div>
        <div className="space-mono h4">:</div>
        <div className="timer-time">
          <h3 className="space-mono h3">{time.getMinutes()}</h3>
          <div className="caption-space" style={{ color: '#fff' }}>Minutes</div>
        </div>
        <div className="space-mono h4">:</div>
        <div className="timer-time">
          <h3 className="space-mono h3">{time.getSeconds()}</h3>
          <div className="caption-space" style={{ color: '#fff' }}>Seconds</div>
        </div>
      </div>
      <button className="nft-timer-button work-sans">
        Place Bid
      </button>
    </div>
  )
}

export { NftPage }