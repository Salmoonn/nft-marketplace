import React from "react";
import Button1 from "./Button1";
import "../style/TopCreator.css"
import config from '../config.json'
import avatar1 from '../img/avatar.png'

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const server = config.server;

function TopCreators() {
  return (
    <div className="top-creator wrapper column">
      <div className="top-creator-header">
        <div className="top-creator-header-inner">
          <h3 className="work-sans">Top Creators</h3>
          <div className="body-work">Checkout Top Rated Creators on the NFT Marketplace</div>
        </div>
        <Button1 href='/' svg='rocketLaunch' text='View Rankings' visible={'not-mobile'} />
      </div>
      <div className="top-creator-artist-cards">
        {Array(12).fill(0).map((e, i) => <Card key={i} i={i} />)}
      </div>
      <Button1 href='/' svg='rocketLaunch' text='View Rankings' visible={'only-mobile'} />
    </div>
  )
}

function Card(props) {
  const number = props.i

  const [avatar, setAvatar] = useState(avatar1);
  const [name, setName] = useState('Name');
  const [login, setLogin] = useState('');
  const [sale, setSale] = useState(0);

  useEffect(() => {
    fetch(server + '/topcreator/' + number)
      .then(res => res.json())
      .then(res => {
        setName(res.name);
        setLogin(res.login);
        setSale(res.totalSale);
        setAvatar(server + '/avatar/' + res.login + '.png');
      })
  }, [])

  return (
    <Link to={'/' + login}>
      <div className={
        number < 6
          ? number < 5
            ? "top-creator-artist-card smart column"
            : "top-creator-artist-card smart column not-mobile"
          : "top-creator-artist-card smart column only-desktop"
      }>
        <div className="top-creator-artist-card-header">
          <div className="top-creator-artist-card-number">
            <p className="space-mono" style={{ color: "#858584" }}>
              {number + 1}
            </p>
          </div>
          <img className="top-creator-avatar" src={avatar}></img>
        </div>
        <div className="top-creator-artist-card-info">
          <h5 className="work-sans">{name}</h5>
          <div className="top-creator-total-sale">
            <p className="work-sans" style={{ color: "#858584" }}>Total sale:</p>
            <p className="base-body-space top-creator-EHT">{sale} ETH</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default TopCreators;

