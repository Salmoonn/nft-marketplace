import '../style/SubForm2.css'
import image from '../img/post.svg'

export default function SubForm2(props) {
  return (
    <form className='subForm2'>
      <input
        className="subInput2 base-body-work"
        type={'email'}
        name={'email'}
        placeholder="Enter your email here"
      />
      <button className='subBut2 smart'>
        <img src={image}></img>
        <div className='work-sans'>Subscribe</div>
      </button>
    </form>
  )
}