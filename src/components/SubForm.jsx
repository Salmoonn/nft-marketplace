import '../style/SubForm.css'
import image from '../img/post.svg'

export default function SubForm(props) {
  return (
    <form className='subForm'>
      <input
        className="subInput base-body-work"
        type='email'
        name='email'
        placeholder="Enter your email here"
      />
      <button className='subBut smart'>
        <img src={image}></img>
        <div className='work-sans'>Subscribe</div>
      </button>
    </form>
  )
}
