import { useEffect, useState } from "react"
import { Collection, CollectionSceleton } from "./Collection";

import "../style/Trending.css"

import config from '../config.json';
const server = config.server;

function Trending() {
  const [coll, setColl] = useState()

  useEffect(() => {
    fetch(server + '/topcollection')
      .then(r => r.json())
      .then(r => setColl(r))
  }, [])

  return (
    <div className="trending wrapper column">
      <div className="trending-head column">
        <h3 className="work-sans">Trending Collection</h3>
        <div className="body-work">Checkout our weekly updated trending collection.</div>
      </div>
      <div className="trending-cards">
        {coll
          ? coll.map((e, i) =>
            <Collection
              key={i}
              id={e}
              visible={i == 0 ? '' : i == 1 ? 'not-mobile' : 'only-desktop'}
            />)
          : Array(3).fill().map((e, i) =>
            <CollectionSceleton
              color1="#333"
              color2="#393939"
              visible={i == 0 ? '' : i == 1 ? 'not-mobile' : 'only-desktop'}
            />
          )
        }
      </div>
    </div>
  )
}

export default Trending;