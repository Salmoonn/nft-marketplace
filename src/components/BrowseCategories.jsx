import '../style/browseCategories.css';
import categoriesArr from "../json/categories.json"



function BrowseCategories() {
  return (
    <div className='browseCategories wrapper'>
      <h3 className="work-sans">Browse Categories</h3>
      <div className="browse-cards">
        {categoriesArr.map(card => newCard(card))}
      </div>
    </div>
  )
}

function newCard(card) {
  return (
    <div key={card.title} className="browse-card smart">
      <div className="browse-card-image">
        <img src={card.bg} className='browse-card-bg'></img>
        <div className='browse-card-main'>
          <img src={card.svg} className='browse-card-svg'></img>
        </div>
      </div>
      <h5 className='browse-card-title work-sans'>{card.title}</h5>
    </div>
  )
}

export default BrowseCategories;