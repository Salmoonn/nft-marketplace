import '../style/HowItWorks.css'

export default function HowItWorks() {
  return (
    <div className='howItWorks wrapper'>
      <div className='howItWorks-header'>
        <h3 className="work-sans h3">How it Works</h3>
        <div className="body-work">Find out how to get started</div>
      </div>
      <div className="howItWorks-body">
        <HowItWorksCard img={'./img/howItWorks/f22f.svg'}
          title={'Setup Your wallet'}
          text={"Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner."} />
        <HowItWorksCard img={'./img/howItWorks/ecfb.svg'}
          title={'Create Collection'}
          text={"Upload your work and setup your collection. Add a description, social links and floor price."} />
        <HowItWorksCard img={'./img/howItWorks/f18f.svg'}
          title={'Start Earning'}
          text={"Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others."} />
      </div>
    </div>
  )
}

function HowItWorksCard({ img, title, text }) {
  return (
    <div className="howItWorks-card">
      <img src={img} className="howItWorks-card-image"></img>
      <div className="howItWorks-card-text">
        <h5 className="work-sans howItWorks-card-title">{title}</h5>
        <div className='base-body-work howItWorks-card-sec'>{text}</div>
      </div>
    </div>
  )
}