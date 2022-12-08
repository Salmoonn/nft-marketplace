import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../style/HeroSection.css"
import img from '../img/start.png'
import config from '../config.json'

function HeroSection() {
  const [image, setImage] = useState(img);
  const [load, setLoad] = useState(false);


  if (!load) {
    fetch(config.server + '/other/start.gif')
      .then(res => res.blob())
      .then(res => {
        setImage(URL.createObjectURL(res))
        setLoad(true);
      })
  }

  return (
    <div className="hero wrapper">
      <div className="hero-info column">
        <div className="hero-headline column">
          <h1 className="work-sans">Discover Digital Art & Collect NFTs</h1>
          <div className="work-sans hero-headline-text">Nft Marketplace Ui Created With Anima For Figma. Collect, Buy And Sell Art From More Than 20k Nft Artists.</div>
        </div>
        <div className="hero-nft-card only-mobile">
          <img src={image} className="only-mobile"></img>
        </div>
        <Link to="/signup">
          <div className="hero-button smart">
            <div className="hero-button-inner">
              <img src="https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/6357ceb6d40a1d649668f069/img/rocketlaunch@2x.svg"></img>
              <div className="button_text">Get Started</div>
            </div>
          </div>
        </Link>
        <div className="additional-info">
          <div>
            <h4 className="space-mono">240k+</h4>
            <div className="work-sans additional-info-text">Total Sale</div>
          </div>
          <div>
            <h4 className="space-mono">100k+</h4>
            <div className="work-sans additional-info-text">Auctions</div>
          </div>
          <div>
            <h4 className="space-mono">240k+</h4>
            <div className="work-sans additional-info-text">Artists</div>
          </div>
        </div>
      </div>
      <div className="hero-nft-card not-mobile">
        <img src={image} className="not-mobile"></img>
      </div>
    </div>
  )
}

export default HeroSection;