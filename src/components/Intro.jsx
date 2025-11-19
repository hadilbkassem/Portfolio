import '../styles/Intro.css';
import UserImage from '../images/user.jpg';

function Intro() {
  return (
    <div className='int_main_div'>
      <img src={UserImage} alt="User" className='profile-img' />
      <div className='desc' id='name'>Hadil Kassem</div>
      <div className='desc' id='prof'>CS Graduate | Tech Enthusiast</div>
    </div>
  );
}

export default Intro;
