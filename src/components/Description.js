import intro from "../constants/intro";
const Description = () =>{
  return(
    <div className="details-container" id="description">
      {intro.map((data, index) => (
        <><div className="user-image-container">
          <img className="user-image" src={data.image} alt="User" />
        </div>
        <div className='details-box'>
            <div>
              <p className='full-name'>Bindu Sagar Singanamalla</p>
              <>
                <p className='des-lines'>{data.description[0]}</p>
                <ul className='description'>
                  {data.description.slice(1).map((desc, index) => (
                    <li key={index}><p className='des-lines'>{desc}</p></li>
                  ))}
                </ul>
              </>
              </div>
            <div className='referecne-links'>
              <a className="img-links" href={data.linkedinURL}><img className='ref-img' src={data.linkedinImg} alt='logo' /></a>
              <a className="img-links" href={data.githubURL}><img className='ref-img' src={data.githubImg} alt='logo' /></a>
              <a className="img-links" href={`https://mail.google.com/mail/?view=cm&fs=1&to=${data.email}`}><img className='ref-img' src={data.gmailImg} alt='logo' /></a>
            </div>
          </div></>
      ))}
    </div>
  )
}
export default Description;