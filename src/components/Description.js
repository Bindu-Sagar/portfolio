import avatar from '../utils/images/avatar.png';
import linkedin from '../utils/images/linkedin.png'
import github from '../utils/images/github.png'
import gmail from '../utils/images/gmail2.png'
const Description = () =>{

  return(
    <div className="details-container">
      <div className="user-image-container">
        <img className="user-image" src={avatar} alt="User" /> 
      </div>
      <div className='details-box'>
        <div>
          <p className='full-name'>Bindu Sagar Singanamalla</p>
          <p className='description'>A full stack developer handles both the front end (UI/UX, HTML, CSS, JavaScript) and back end (server, databases, APIs) of a web application. They can build and maintain both client and server-side features.</p>
        </div>
        <div className='referecne-links'>
            <img className='ref-img' src={linkedin} alt='logo'/>
            <img className='ref-img' src={github} alt='logo'/>
            <img className='ref-img' src={gmail} alt='logo'/>

        </div>
      </div>
    </div>
  )
}
export default Description;