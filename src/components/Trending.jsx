import "../style/trending.css"

const path = require('../config.json')['server'] + '/img/'

function Trending() {
  return (
    <div className="trending wrapper column">
      <div className="trending-head column">
        <h3 className="work-sans">Trending Collection</h3>
        <div className="body-work">Checkout our weekly updated trending collection.</div>
      </div>
      <div className="trending-cards">
        <CollectionCard />
        <CollectionCard className="not-mobile" />
        <CollectionCard className="only-desktop" />
      </div>
    </div>
  )
}

function CollectionCard(props) {
  return (
    <div className={'trending-card column ' + (props.className
      ? props.className
      : '')}>
      <div className="trending-card-photos">
        <a href="#"><img className="smart trending-card-photo-main" src={path + '78d5.png'}></img></a>

        <div className="trending-card-frame">
          <a href="#">
            <img className="smart" src={path + '734c.png'} />
          </a>
          <a href="#">
            <img className="smart" src={path + '13cb.png'} />
          </a>
          <a href="#">
            <div className="trending-card-frame-number smart">
              <div className="space-mono h5">1025+</div>
            </div>
          </a>
        </div>
      </div>
      <div className="collection-info column">
        <div className="work-sans h5">DSGN Animals</div>
        <a href="#">
          <div className="trending-artist-card">
            <img width={24} src={path + '78d5.png'}></img>
            <div className="base-body-work trending-artist-name">MrFox</div>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Trending;