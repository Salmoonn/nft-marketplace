import '../style/browseCategories.css';

import * as images from './BrowseImage'

const arr = [
  {
    title: "Art",
    bg: images.ArtBg,
    svg: images.ArtSvg,
  },
  {
    title: "Collectibles",
    bg: images.CollectiblesBg,
    svg: images.CollectiblesSvg,
  },
  {
    title: "Music",
    bg: images.MusicBg,
    svg: images.MusicSvg,
  },
  {
    title: "Photography",
    bg: images.PhotographyBg,
    svg: images.PhotographySvg,
  },
  {
    title: "Video",
    bg: images.VideoBg,
    svg: images.VideoSvg,
  },
  {
    title: "Utility",
    bg: images.UtilityBg,
    svg: images.UtilitySvg,
  },
  {
    title: "Sport",
    bg: images.SportBg,
    svg: images.SportSvg,
  },
  {
    title: "Virtual Worlds",
    bg: images.VirtualWorldBg,
    svg: images.VirtualWorldSvg,
  },

]

function BrowseCategories() {
  return (
    <div className='browseCategories wrapper'>
      <h3 className="work-sans">Browse Categories</h3>
      <div className="browse-cards">
        {arr.map(elem => newCard(elem))}
      </div>
    </div>
  )
}

function newCard({ title, bg, svg }) {
  return (
    <div key={title} className="browse-card smart">
      <div className="browse-card-image">
        <img src={bg} className='browse-card-bg'></img>
        <div className='browse-card-main'>
          <img src={svg} className='browse-card-svg'></img>
        </div>
      </div>
      <h5 className='browse-card-title work-sans'>{title}</h5>
    </div>
  )
}

export default BrowseCategories;