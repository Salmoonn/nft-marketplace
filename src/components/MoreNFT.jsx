import { NftCard, NftCardSceleton } from "./NftCard";
import { useEffect, useState } from "react";

import Button1 from "./Button1";

import "../style/MoreNFT.css"

import config from '../config.json'
const server = config.server

function MoreNFT() {

  const [cards, setCards] = useState('');

  useEffect(() => {
    fetch(server + '/unit/all')
      .then(r => r.json())
      .then(r => setCards(r.slice(0, 3)))
  }, [])

  return (
    <div className="moreNFT wrapper">
      <div className="moreNFT-header">
        <div className="moreNFT-header-text">
          <h3 className="work-sans">Discover More NFTs</h3>
          <div className="body-work">Explore New Trending NFTs</div>
        </div>
        <Button1 href='marketplace' svg='eye' text='See All' visible='not-mobile' />
      </div>
      <div className="moreNFT-body">
        {cards.length === 0
          ? Array(3).fill().map((e, i) =>
            <NftCardSceleton
              key={i}
              bg="#3b3b3b"
              color1="#444"
              color2="#494949"
              visible={i == 2 ? 'not-laptop' : ''}
            />
          )
          : cards.map((e, i) =>
            <NftCard
              key={i}
              id={e.id}
              bg='#3b3b3b'
              visible={i == 2 ? 'not-laptop' : ''}
            />
          )
        }
      </div>
      <Button1 href='marketplace' svg='eye' text='See All' visible='only-mobile' />
    </div>
  )
}

export default MoreNFT;