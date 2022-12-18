import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../style/NftCard.css";

import defaultAvatar from '../img/avatar.png'

import config from '../config.json'
const server = config.server

function NftCard({ id, visible = false, bg }) {

  const [card, setCard] = useState(defaultAvatar)
  const [creator, setCreator] = useState('Creator')
  const [name, setName] = useState('NFT name')
  const [price, setPrice] = useState('0')
  const [bid, setBid] = useState('0')
  const [avatar, setAvatar] = useState(defaultAvatar)

  useEffect(() => {
    fetch(server + '/unit/' + id)
      .then(res => res.json())
      .then(res => {
        setName(res.name)
        setPrice(res.price)
        setBid(res.highestBid)
        setAvatar(server + '/a/' + res.creator + '.png')

        fetch(server + '/' + res.creator)
          .then(res => res.json())
          .then(res => {
            setCreator(res.name)
          })
      })
    // .catch((err) => console.log(err))
    setCard(server + '/i/' + id + '.png')
  }, [])

  return (
    <Link to={'/unit/' + id} className={visible ? visible : ''}>
      <div className="nftCard smart" style={{ background: bg }}>
        <img className="nftCard-image" src={card} />
        <div className="nftCard-body">
          <div className="nftCard-info">
            <div className="work-sans h5">{name}</div>
            <div className="nftCard-creator">
              <img src={avatar} style={{ width: 24, borderRadius: 12 }} />
              <p className="space-mono">{creator}</p>
            </div>
          </div>
          <div className="nftCard-footer">
            <div className="nftCard-price">
              <div className="caption-space">Price</div>
              <div className="base-body-space nftCard-price-body">{price} ETH</div>
            </div>
            <div className="nftCard-bid">
              <div className="caption-space">Highest Bid</div>
              <div className="base-body-space nftCard-price-body">{bid} ETH</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

function NftCardSceleton({ visible, bg, color1, color2 }) {

  const anim = {
    "--i": color1,
    "--j": color2
  }

  return (
    <Link className={visible ? visible : ''}>
      <div className="nftCard sceleton" style={{ background: bg }}>
        <div className="nftCard-image anim" style={anim} />
        <div className="nftCard-body">
          <div className="nftCard-info" >
            <div className="work-sans h5 anim" style={anim} />
            <div className="nftCard-creator">
              <div className="nftCard-creator-avatar anim" style={anim} />
              <p className="space-mono anim" style={anim} />
            </div>
          </div>
          <div className="nftCard-footer">
            <div className="nftCard-price">
              <div className="caption-space price anim" style={anim} />
              <div className="base-body-space nftCard-price-body anim" style={anim} />
            </div>
            <div className="nftCard-bid">
              <div className="caption-space highest anim" style={anim}></div>
              <div className="base-body-space nftCard-price-body anim" style={anim} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export { NftCard, NftCardSceleton }