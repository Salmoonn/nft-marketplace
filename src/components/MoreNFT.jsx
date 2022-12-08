import Button1 from "./Button1";
import { NftCard } from "./NftCard";

import "../style/MoreNFT.css"

function MoreNFT() {
  return (
    <div className="moreNFT wrapper">
      <div className="moreNFT-header">
        <div className="moreNFT-header-text">
          <h3 className="work-sans">Discover More NFTs</h3>
          <div className="body-work">Explore New Trending NFTs</div>
        </div>
        <Button1 href='/' svg='eye' text='See All' visible='not-mobile' />
      </div>
      <div className="moreNFT-body">
        <NftCard id='fda1' bg='#3b3b3b' />
        <NftCard id='5b73' bg='#3b3b3b' />
        <NftCard id='45a' visible='not-laptop' bg='#3b3b3b' />
      </div>
      <Button1 href='/' svg='eye' text='See All' visible='only-mobile' />
    </div>
  )
}

export default MoreNFT;