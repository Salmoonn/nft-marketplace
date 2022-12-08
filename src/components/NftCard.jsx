import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../style/NftCard.css";

import Card from '../img/card.png'
import Avatar from '../img/avatar.png'

import config from '../config.json'
const server = config.server

function NftCard({ id, visible = false, bg }) {
  const card = server + '/img/' + id + '.png'

  const [creator, setCreator] = useState('Creator')
  const [name, setName] = useState('NFT name')
  const [price, setPrice] = useState('0')
  const [bid, setBid] = useState('0')
  const [avatar, setAvatar] = useState(Avatar)

  useEffect(() => {
    fetch(server + '/unit/' + id)
      .then(res => res.json())
      .then(res => {
        setName(res.name)
        setPrice(res.price)
        setBid(res.highestBid)
        setAvatar(server + '/avatar/' + res.creator + '.png')

        fetch(server + '/' + res.creator)
          .then(res => res.json())
          .then(res => {
            setCreator(res.name)
          })
      })
      .catch((err) => console.log(err))
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

export { NftCard }