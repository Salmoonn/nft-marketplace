import Timer from './Timer'
import Button2 from './Button2'
import '../style/Highlight.css'

export default function Highlight() {
  return (
    <div className="highlight-bg" style={{ backgroundImage: 'url(./img/test.png)' }}>
      <div className='highlight-gradient'>
        <div className="highlight wrapper">
          <div className='highlight-body'>
            <div className='highlight-artis'>
              <img />
              <div className='base-body-work'>Shroomie</div>
            </div>
            <h2 className="work-sans">Magic Mashroom</h2>
            <div className='only-mobile asd2'>
              <Timer />
            </div>
            <Button2 props={{ text: 'See NFT', svg: 'eye', href: '/' }} />
          </div>
          <div className='highlight-timer'>
            <div className='not-mobile'>
              <Timer />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

