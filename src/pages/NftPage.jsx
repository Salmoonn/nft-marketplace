import { Link, useParams } from "react-router-dom"
import '../style/NftPage.css'
import config from '../config.json'
import { useEffect, useState } from "react";
import globe from '../img/globe.svg'
import Button1 from '../components/Button1'
import { NftCard } from "../components/NftCard";

const server = config.server;

function NftPage() {
  const params = useParams();

  const banner = server + '/i/' + params.id + '.png'

  const [name, setName] = useState('NFT Name');
  const [minted, setMinted] = useState(new Date());
  const [creator, setCreator] = useState('Creator');
  const [description, setDescription] = useState();
  const [tags, setTags] = useState();
  const [avatar, setAvatar] = useState();
  const [login, setLogin] = useState('');

  useEffect(() => {
    fetch(server + '/unit/' + params.id)
      .then(r => r.json())
      .then(r => {
        setName(r.name);
        setMinted(new Date(r.minted));
        setTags(r.tags);
        setAvatar(server + '/a/' + r.creator + '.png');
        setLogin(r.creator);

        fetch(server + '/' + r.creator)
          .then(r => r.json())
          .then(r => {
            setCreator(r.name)
          })

        fetch(server + '/d/' + params.id + '.txt')
          .then(r => r.ok ? r.text() : '')
          .then(r => setDescription(r))
          .catch((err) => console.log(err))
      })
  }, [params])

  return (
    <div className="nft-page">
      <div className="nft-cover">
        <img src={banner} />
      </div>
      <NFTInfo key={name} name={name} minted={minted} creator={creator} description={description} tags={tags} avatar={avatar} login={login} />
      <NFTPageMore login={login} id={params.id} />
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

function NFTInfo({ name, minted, creator, description, tags, avatar, login }) {
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
            <Link to={'/' + login}>
              <div className="nft-info-created-creater">
                <img src={avatar} className="nft-avatar" />
                <div className="work-sans">{creator}</div>
              </div>
            </Link>
          </div>
          <div className="only-mobile">
            <AuctionTime />
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
      <div className="not-mobile">
        <AuctionTime />
      </div>
    </div>
  )
}

function AuctionTime() {
  let time = new Date(new Date().setHours(0, 0, 0, 0) + 24 * 60 * 60 * 1000)
  const [timer, setTimer] = useState(new Date(time - new Date()))

  useEffect(() => {
    setTimeout(() => setTimer(new Date(time - new Date())), 1000)
  }, [timer])

  return (
    <div className="timer">
      <div className="caption-space" style={{ color: '#fff' }}>
        Auction end in:
      </div>
      <div className="timer-body">
        <div className="timer-time">
          <div className="space-mono h3">{timer.getUTCHours()}</div>
          <div className="caption-space" style={{ color: '#fff' }}>Hours</div>
        </div>
        <div className="space-mono h4">:</div>
        <div className="timer-time">
          <h3 className="space-mono h3">{timer.getMinutes()}</h3>
          <div className="caption-space" style={{ color: '#fff' }}>Minutes</div>
        </div>
        <div className="space-mono h4">:</div>
        <div className="timer-time">
          <h3 className="space-mono h3">{timer.getSeconds()}</h3>
          <div className="caption-space" style={{ color: '#fff' }}>Seconds</div>
        </div>
      </div>
      <button className="nft-timer-button work-sans">
        Place Bid
      </button>
    </div>
  )
}

function NFTPageMore({ login, id }) {

  const [moreNFT, setMoreNFT] = useState([]);

  useEffect(() => {
    fetch(server + '/' + login)
      .then(r => r.json())
      .then(r => {
        setMoreNFT(r.item)
      })
  }, [login])

  return (
    <div className="nft-page-more wrapper column">
      <div className="nft-page-more-headline">
        <div className="title work-sans">More From This Artist</div>
        <Button1 href={login} svg="arrowright" text='Go To Artist Page' visible="not-mobile" />
      </div>
      <div className="nft-page-more-body">
        {moreNFT.filter((e) => id !== e)
          .map((e, i) =>
            <NftCard
              key={e}
              id={e}
              bg="#3B3B3B"
              visible={'' + (i >= 6 ? 'only-desktop' : '') + (i >= 2 && i < 6 ? 'not-mobile' : '')}
            />
          )}
      </div>
      <Button1 href={login} svg="arrowright" text='Go To Artist Page' visible="only-mobile" />
    </div>
  )
}

export { NftPage }