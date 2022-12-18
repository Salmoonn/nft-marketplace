import { useEffect, useState } from "react"
import { NftCard, NftCardSceleton } from "../components/NftCard"
import { Collection, CollectionSceleton } from "../components/Collection";

import "../style/Marketplace.css"

import glass from "../img/glass.svg"
import config from "../config.json"
import { TabBar } from "../components/TabBar"
const server = config.server


const Marketplace = () => {

  const [cards, setCards] = useState([]);
  const [collections, setCollections] = useState([]);
  const [search, setSearh] = useState('');
  const [tabBar, setTabBar] = useState('NFTs');
  const [filterCards, setFilterCards] = useState([]);
  const [filterCollections, setFilterCollections] = useState([]);

  const inputOnChange = (e) => {
    const search = e.target.value.toLowerCase()
    setSearh(search);
    setFilterCards(cards.filter(e => e.name.toLowerCase().includes(search)));
    setFilterCollections(collections.filter(e => e.name.toLowerCase().includes(search)));
  }

  useEffect(() => {
    fetch(server + '/unit/all')
      .then(r => r.json())
      .then(r => {
        setCards(r)
        setFilterCards(r.filter(e => e.name.toLowerCase().includes(search)))
      })
    fetch(server + '/c/all')
      .then(r => r.json())
      .then(r => {
        setCollections(r)
        setFilterCollections(r.filter(e => e.name.toLowerCase().includes(search)))
      })
  }, [])

  return (
    <div className="marketplace">
      <div className="marketplace-header wrapper column">
        <div className="marketplace-header-main work-sans column">
          <div className="marketplace-headline">Browse Marketplace</div>
          <div className="marketplace-subhead">Browse through more than 50k NFTs on the NFT Marketplace.</div>
        </div>
        <div className="marketplace-search">
          <input type="text" placeholder="Search your favorite NFTs" className="work-sans" value={search} onChange={inputOnChange} />
          <img src={glass} />
        </div>
      </div>
      <div className="marketplace-main">
        <TabBar
          tab={[
            { 'title': 'NFTs', 'value': filterCards.length },
            { 'title': 'Collections', 'value': filterCollections.length }
          ]}
          active={tabBar}
          cb={setTabBar}
        />
        <div className="marketplace-main-body-bg">
          <div className="marketplace-main-body wrapper">
            {
              {
                'NFTs': filterCards.length !== 0
                  ? filterCards.map(e => <NftCard key={e.id} id={e.id} bg="#2b2b2b" />)
                  : Array(3).fill().map((e, i) =>
                    <NftCardSceleton
                      key={i}
                      bg="#2b2b2b"
                      color1="#333"
                      color2="#393939"
                    />),
                'Collections': filterCollections.length === 0
                  ? Array(3).fill().map((e, i) => <CollectionSceleton key={i} color1="#333" color2="#393939" />)
                  : filterCollections.map(e => <Collection key={e.name} id={e.id} />)
              }[tabBar]
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export { Marketplace }