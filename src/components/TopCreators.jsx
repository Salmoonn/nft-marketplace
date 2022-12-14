import React from "react";
import Button1 from "./Button1";
import "../style/TopCreator.css"
import config from '../config.json'
import defaultAvatar from '../img/avatar.png'

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const server = config.server;

function TopCreators() {
  const [topCreator, setTopCreator] = useState([])

  useEffect(() => {
    fetch(server + '/topcreator')
      .then(r => r.json())
      .then(r => setTopCreator(r.slice(0, 12)))
  }, [])

  return (
    <div className="top-creator wrapper column">
      <div className="top-creator-header">
        <div className="top-creator-header-inner">
          <h3 className="work-sans">Top Creators</h3>
          <div className="body-work">Checkout Top Rated Creators on the NFT Marketplace</div>
        </div>
        <Button1 href='topcreators' svg='rocketLaunch' text='View Rankings' visible={'not-mobile'} />
      </div>
      <div className="top-creator-artist-cards">
        {topCreator.length === 0
          ? Array(12).fill().map((e, i) =>
            <CardSceleton
              key={i}
              visible={i < 6
                ? i < 5
                  ? ""
                  : "not-mobile"
                : "only-desktop"}
            />
          )
          : topCreator.map((e, i) =>
            <Card
              key={i}
              number={i}
              login={e}
              visible={i < 6
                ? i < 5
                  ? ""
                  : "not-mobile"
                : "only-desktop"}
            />
          )}
      </div>
      <Button1 href="topcreators" svg='rocketLaunch' text='View Rankings' visible={'only-mobile'} />
    </div>
  )
}

function Card({ number, login, visible }) {

  const [avatar, setAvatar] = useState(defaultAvatar);
  const [name, setName] = useState('Cretor');
  const [sale, setSale] = useState(0);


  useEffect(() => {
    fetch(server + '/' + login)
      .then(res => res.json())
      .then(res => {
        setName(res.name);
        setSale(res.totalSale);
        setAvatar(server + '/a/' + res.login + '.png');
      })
  }, [])

  return (
    <Link to={'/' + login}>
      <div className={'top-creator-artist-card smart column ' + visible}>
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

function CardSceleton({ visible }) {

  const color = {
    "--i": "#333",
    "--j": "#353535",
  }

  return (
    <div className={'top-creator-artist-card column sceleton ' + visible}>
      <div className="top-creator-artist-card-header">
        <div className="top-creator-artist-card-number anim only-desktop" style={color} />
        <div className="top-creator-avatar anim" style={color} />
      </div>
      <div className="top-creator-artist-card-info">
        <h5 className="top-creator-artist-card-name work-sans anim" style={color} />
        <div className="top-creator-total-sale anim" style={color} />
      </div>
    </div>
  )
}

export default TopCreators;

