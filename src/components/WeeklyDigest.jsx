import SubForm from './SubForm';
import SubForm2 from './SubForm2';
import '../style/WeeklyDigest.css';
import image from '../img/weekly.png'

export default function WeeklyDigest() {
  return (
    <div className='weekly wrapper'>
      <div className="weekly-main">
        <div className="weekly-image-block">
          <img src={image} className='weekly-image'>
          </img>
        </div>
        <div className='weekly-body'>
          <div className='weekly-text'>
            <h3 className='work-sans'>Join Our Weekly Diegst</h3>
            <div className='body-work'>Get Exclusive Promotions & Updates Straight To Your Inbox.</div>
          </div>
          <div className='only-desktop'>
            <SubForm visible='only-desktop' />
          </div>
          <div className='not-desktop'>
            <SubForm2 visible='not-desktop' />
          </div>
        </div>
      </div>
    </div>
  )
}